import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookBySlug, getChapterContent, getAllBooks } from "@/services/bible";
import { BibleBreadcrumb } from "@/components/bible/bible-nav";
import { ChapterReader } from "@/components/bible/chapter-reader";
import { BookChapterSidebar, MobileBookSelector } from "@/components/bible/book-chapter-sidebar";

interface ChapterPageProps {
  params: Promise<{
    bookId: string;
    chapter: string;
  }>;
}

export async function generateMetadata({
  params,
}: ChapterPageProps): Promise<Metadata> {
  const { bookId, chapter } = await params;
  const book = await getBookBySlug(bookId);
  const chapterNum = parseInt(chapter, 10);

  if (!book || isNaN(chapterNum)) {
    return {
      title: "Không tìm thấy",
    };
  }

  return {
    title: `${book.name} - Chương ${chapterNum} - Kinh Thánh`,
    description: `Đọc ${book.name} chương ${chapterNum} trong Kinh Thánh Công Giáo`,
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { bookId, chapter } = await params;

  const [book, allBooks] = await Promise.all([
    getBookBySlug(bookId),
    getAllBooks(),
  ]);

  const chapterNum = parseInt(chapter, 10);

  if (!book) {
    notFound();
  }

  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > book.chapters) {
    notFound();
  }

  const chapterContent = await getChapterContent(bookId, chapterNum);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container max-w-7xl mx-auto py-6 px-4">
        <div className="flex gap-8">
          {/* Sidebar - Hidden on mobile */}
          <BookChapterSidebar
            books={allBooks}
            currentBookId={book.id}
            currentChapter={chapterNum}
            className="hidden lg:block"
          />

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-6">
            <BibleBreadcrumb book={book} chapter={chapterNum} />

            {/* Mobile Book Selector */}
            <MobileBookSelector
              books={allBooks}
              currentBook={book}
              currentChapter={chapterNum}
            />

            {/* Chapter Reader */}
            <ChapterReader
              book={book}
              chapter={chapterNum}
              verses={chapterContent?.verses || []}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
