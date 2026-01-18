"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ChapterGridProps {
  bookId: string;
  totalChapters: number;
  currentChapter?: number;
}

export function ChapterGrid({ bookId, totalChapters, currentChapter }: ChapterGridProps) {
  const chapters = Array.from({ length: totalChapters }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
      {chapters.map((chapter) => (
        <Link key={chapter} href={`/bible/${bookId}/${chapter}`}>
          <Button
            variant={currentChapter === chapter ? "default" : "outline"}
            className="w-full h-10 text-sm"
          >
            {chapter}
          </Button>
        </Link>
      ))}
    </div>
  );
}
