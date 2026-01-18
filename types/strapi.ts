// Strapi v5 API Response Types

// Generic Strapi response wrapper
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Testament type from Strapi v5
export interface StrapiTestament {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // Relations (when populated)
  books?: StrapiBook[];
}

// Book type from Strapi v5
export interface StrapiBook {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  shortName?: string;
  category?: string;
  chaptersCount?: number;
  order?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // Relations (when populated)
  testament?: StrapiTestament;
  chapters?: StrapiChapter[];
}

// Chapter type from Strapi v5
export interface StrapiChapter {
  id: number;
  documentId: string;
  number: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // Relations (when populated)
  book?: StrapiBook;
  verses?: StrapiVerse[];
}

// Verse type from Strapi v5
export interface StrapiVerse {
  id: number;
  documentId: string;
  number: number;
  content: string; // Note: "content" not "text"
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  // Relations (when populated)
  chapter?: StrapiChapter;
}

// Response types for API calls
export type TestamentsResponse = StrapiResponse<StrapiTestament[]>;
export type TestamentResponse = StrapiResponse<StrapiTestament>;
export type BooksResponse = StrapiResponse<StrapiBook[]>;
export type BookResponse = StrapiResponse<StrapiBook>;
export type ChaptersResponse = StrapiResponse<StrapiChapter[]>;
export type ChapterResponse = StrapiResponse<StrapiChapter>;
export type VersesResponse = StrapiResponse<StrapiVerse[]>;

// Transformed types for use in components
export interface Book {
  id: string;
  name: string;
  shortName: string;
  testament: string; // testament slug
  testamentName: string;
  category: string;
  chapters: number;
  order: number;
}

export interface Chapter {
  bookId: string;
  chapter: number;
  verses: Verse[];
}

export interface Verse {
  number: number;
  text: string;
}

export interface Testament {
  id: string;
  name: string;
  slug: string;
}
