"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { VerseListComponent, DropCapVerse } from "@/components/bible/verse";
import {
  ReadingControls,
  ChapterHeader,
  DisplayMode,
} from "@/components/bible/reading-controls";
import { ChapterNavigation } from "@/components/bible/bible-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Book, Verse } from "@/types/bible";

interface ChapterReaderProps {
  book: Book;
  chapter: number;
  verses: Verse[];
}

export function ChapterReader({ book, chapter, verses }: ChapterReaderProps) {
  const [displayMode, setDisplayMode] = useState<DisplayMode>("default");
  const [fontSize, setFontSize] = useState(18);

  const firstVerse = verses[0];
  const restVerses = verses.slice(1);

  return (
    <div className="space-y-6">
      {/* Reading Controls */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="text-sm text-muted-foreground">
          {verses.length} câu
        </div>
        <ReadingControls
          displayMode={displayMode}
          onDisplayModeChange={setDisplayMode}
          fontSize={fontSize}
          onFontSizeChange={setFontSize}
        />
      </div>

      {/* Main Reading Card */}
      <Card className="overflow-hidden">
        {/* Chapter Header */}
        <ChapterHeader
          bookName={book.name}
          chapter={chapter}
          testament={book.testamentName}
        />

        <Separator />

        {/* Verses Content */}
        <CardContent
          className={cn(
            "py-8 px-4 md:px-8 lg:px-12",
            "bg-gradient-to-b from-background to-muted/20"
          )}
          style={{ fontSize: `${fontSize}px` }}
        >
          <div className="max-w-3xl mx-auto">
            {verses.length > 0 ? (
              displayMode === "compact" ? (
                // Compact mode - continuous text
                <div
                  className={cn(
                    "prose prose-lg dark:prose-invert max-w-none",
                    "prose-p:leading-loose prose-p:tracking-wide"
                  )}
                >
                  <VerseListComponent
                    verses={verses}
                    displayMode="compact"
                    bookName={book.name}
                    chapter={chapter}
                  />
                </div>
              ) : (
                // Default and Study modes
                <div className="space-y-2">
                  {/* First verse with drop cap */}
                  {firstVerse && displayMode === "default" && (
                    <DropCapVerse
                      number={firstVerse.number}
                      text={firstVerse.text}
                      bookName={book.name}
                      chapter={chapter}
                    />
                  )}

                  {/* Rest of verses */}
                  <VerseListComponent
                    verses={displayMode === "default" ? restVerses : verses}
                    displayMode={displayMode}
                    bookName={book.name}
                    chapter={chapter}
                  />
                </div>
              )
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="text-6xl opacity-20">📖</div>
                <p className="text-muted-foreground">
                  Chưa có nội dung cho chương này.
                </p>
                <p className="text-sm text-muted-foreground">
                  Nội dung đang được cập nhật.
                </p>
              </div>
            )}
          </div>
        </CardContent>

        <Separator />

        {/* Navigation */}
        <CardContent className="py-6">
          <ChapterNavigation
            bookId={book.id}
            currentChapter={chapter}
            totalChapters={book.chapters}
          />
        </CardContent>
      </Card>

      {/* Quick Jump Hint */}
      <p className="text-center text-xs text-muted-foreground">
        💡 Nhấn vào số câu để highlight • Di chuột để sao chép câu
      </p>
    </div>
  );
}
