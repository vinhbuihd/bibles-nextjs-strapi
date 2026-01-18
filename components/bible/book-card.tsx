"use client";

import Link from "next/link";
import { Book } from "@/types/bible";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/bible/${book.id}`}>
      <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-md bg-primary/10">
              <BookOpen className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{book.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {book.shortName} &bull; {book.chapters} chương
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

interface BookListProps {
  books: Book[];
  title?: string;
}

export function BookList({ books, title }: BookListProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-lg font-semibold text-primary">{title}</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
