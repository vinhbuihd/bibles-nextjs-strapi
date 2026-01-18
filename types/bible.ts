// Static Bible Data Types

export interface Testament {
  id: string;
  name: string;
  slug: string;
}

export interface Book {
  id: string;
  name: string;
  shortName: string;
  testament: string;
  testamentName: string;
  category: string;
  categoryName: string;
  chapters: number;
  order: number;
}

export interface Verse {
  number: number;
  text: string;
}

export interface Chapter {
  bookId: string;
  chapter: number;
  verses: Verse[];
}

// JSON file structure types
export interface BooksJsonData {
  testaments: Testament[];
  books: Book[];
}

export interface BookContentJson {
  bookId: string;
  chapters: {
    number: number;
    verses: Verse[];
  }[];
}
