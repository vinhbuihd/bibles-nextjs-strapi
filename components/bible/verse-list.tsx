"use client";

import { Chapter } from "@/types/bible";
import { cn } from "@/lib/utils";

interface VerseListProps {
  chapter: Chapter;
  className?: string;
}

export function VerseList({ chapter, className }: VerseListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {chapter.verses.map((verse) => (
        <div
          key={verse.number}
          className="group flex gap-3 hover:bg-accent/50 p-2 rounded-md -mx-2 transition-colors"
        >
          <span className="text-primary font-semibold text-sm min-w-[2rem] text-right">
            {verse.number}
          </span>
          <p className="text-foreground leading-relaxed flex-1">
            {verse.text}
          </p>
        </div>
      ))}
    </div>
  );
}
