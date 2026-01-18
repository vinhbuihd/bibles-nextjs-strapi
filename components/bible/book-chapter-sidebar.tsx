"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Book } from "@/types/bible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { BookOpen, ChevronDown, ChevronRight } from "lucide-react";

interface BookChapterSidebarProps {
  books: Book[];
  currentBookId?: string;
  currentChapter?: number;
  className?: string;
}

export function BookChapterSidebar({
  books,
  currentBookId,
  currentChapter,
  className,
}: BookChapterSidebarProps) {
  const [expandedBook, setExpandedBook] = useState<string | null>(currentBookId || null);

  return (
    <aside className={cn("w-72 shrink-0", className)}>
      <div className="sticky top-20">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 px-2">
          <BookOpen className="h-5 w-5" />
          Mục lục
        </h2>

        <ScrollArea className="h-[calc(100vh-12rem)]">
          <nav className="space-y-1 pr-4">
            {books.map((book) => {
              const isExpanded = expandedBook === book.id;
              const isCurrentBook = currentBookId === book.id;

              return (
                <Collapsible
                  key={book.id}
                  open={isExpanded}
                  onOpenChange={(open) => setExpandedBook(open ? book.id : null)}
                >
                  <CollapsibleTrigger asChild>
                    <button
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-sm transition-colors",
                        isCurrentBook
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-muted"
                      )}
                    >
                      <span className="truncate">{book.name}</span>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      )}
                    </button>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="grid grid-cols-5 gap-1 p-2 ml-2 border-l">
                      {Array.from({ length: book.chapters }, (_, i) => i + 1).map(
                        (chapter) => {
                          const isCurrentChapter =
                            isCurrentBook && currentChapter === chapter;

                          return (
                            <Link
                              key={chapter}
                              href={`/bible/${book.id}/${chapter}`}
                              className={cn(
                                "flex items-center justify-center h-8 w-8 rounded text-sm transition-colors",
                                isCurrentChapter
                                  ? "bg-primary text-primary-foreground font-medium"
                                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
                              )}
                            >
                              {chapter}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}

interface MobileBookSelectorProps {
  books: Book[];
  currentBook?: Book;
  currentChapter?: number;
}

export function MobileBookSelector({
  books,
  currentBook,
  currentChapter,
}: MobileBookSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden mb-4">
      <Button
        variant="outline"
        className="w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {currentBook?.name || "Chọn sách"}{" "}
          {currentChapter && `- Chương ${currentChapter}`}
        </span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </Button>

      {isOpen && (
        <div className="mt-2 p-4 border rounded-lg bg-background max-h-96 overflow-y-auto">
          {books.map((book) => (
            <div key={book.id} className="mb-3">
              <p className="font-medium text-sm mb-2">{book.name}</p>
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: book.chapters }, (_, i) => i + 1).map((chapter) => (
                  <Link
                    key={chapter}
                    href={`/bible/${book.id}/${chapter}`}
                    className={cn(
                      "flex items-center justify-center h-8 rounded text-sm",
                      currentBook?.id === book.id && currentChapter === chapter
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-primary/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {chapter}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
