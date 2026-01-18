// Bible Services - Reading from Static JSON Data

import {
  Book,
  Chapter,
  Testament,
  Verse,
  BooksJsonData,
  BookContentJson,
} from "@/types/bible";

// Import static data
import booksData from "@/data/bible/books.json";

// Type assertion for imported JSON
const staticData = booksData as BooksJsonData;

// Dynamic import for book content (lazy loading)
async function loadBookContent(bookId: string): Promise<BookContentJson | null> {
  try {
    const content = await import(`@/data/bible/content/${bookId}.json`);
    return content.default as BookContentJson;
  } catch {
    // Book content file doesn't exist yet
    return null;
  }
}

// Get all testaments
export async function getAllTestaments(): Promise<Testament[]> {
  return staticData.testaments;
}

// Get all books
export async function getAllBooks(): Promise<Book[]> {
  return staticData.books;
}

// Get books by testament slug
export async function getBooksByTestament(
  testamentSlug: string
): Promise<Book[]> {
  return staticData.books.filter((book) => book.testament === testamentSlug);
}

// Get a single book by slug/id
export async function getBookBySlug(slug: string): Promise<Book | null> {
  const book = staticData.books.find((b) => b.id === slug);
  return book || null;
}

// Get chapter content with verses
export async function getChapterContent(
  bookSlug: string,
  chapterNumber: number
): Promise<Chapter | null> {
  const bookContent = await loadBookContent(bookSlug);

  if (!bookContent) {
    return null;
  }

  const chapter = bookContent.chapters.find((c) => c.number === chapterNumber);

  if (!chapter) {
    return null;
  }

  return {
    bookId: bookSlug,
    chapter: chapterNumber,
    verses: chapter.verses,
  };
}

// Get all chapters for a book (just numbers, no content)
export async function getBookChapters(bookSlug: string): Promise<number[]> {
  const book = staticData.books.find((b) => b.id === bookSlug);

  if (!book) {
    return [];
  }

  // Return array of chapter numbers based on book's chapter count
  return Array.from({ length: book.chapters }, (_, i) => i + 1);
}

// Check if a book has content available
export async function hasBookContent(bookSlug: string): Promise<boolean> {
  const content = await loadBookContent(bookSlug);
  return content !== null;
}

// Get available chapters for a book (chapters that have content)
export async function getAvailableChapters(bookSlug: string): Promise<number[]> {
  const bookContent = await loadBookContent(bookSlug);

  if (!bookContent) {
    return [];
  }

  return bookContent.chapters.map((c) => c.number).sort((a, b) => a - b);
}

// Category names in Vietnamese
export const categoryNames: Record<string, string> = {
  pentateuch: "Ngũ Thư",
  historical: "Lịch Sử",
  wisdom: "Giáo Huấn",
  prophets: "Ngôn Sứ",
  gospels: "Tin Mừng",
  acts: "Công Vụ",
  letters: "Thư",
  revelation: "Khải Huyền",
};

// Search verses across all available content
export async function searchVerses(
  query: string,
  limit: number = 20
): Promise<
  {
    bookId: string;
    bookName: string;
    chapter: number;
    verse: Verse;
    reference: string;
  }[]
> {
  const results: {
    bookId: string;
    bookName: string;
    chapter: number;
    verse: Verse;
    reference: string;
  }[] = [];

  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return results;
  }

  // Search through all books that have content
  for (const book of staticData.books) {
    if (results.length >= limit) break;

    const content = await loadBookContent(book.id);
    if (!content) continue;

    for (const chapter of content.chapters) {
      if (results.length >= limit) break;

      for (const verse of chapter.verses) {
        if (results.length >= limit) break;

        if (verse.text.toLowerCase().includes(normalizedQuery)) {
          results.push({
            bookId: book.id,
            bookName: book.name,
            chapter: chapter.number,
            verse,
            reference: `${book.name} ${chapter.number}:${verse.number}`,
          });
        }
      }
    }
  }

  return results;
}
