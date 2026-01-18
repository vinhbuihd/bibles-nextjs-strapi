"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Book } from "@/types/bible";

interface BibleBreadcrumbProps {
  book?: Book;
  chapter?: number;
}

export function BibleBreadcrumb({ book, chapter }: BibleBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="flex items-center gap-1">
            <Home className="h-4 w-4" />
            Trang chủ
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {book ? (
            <BreadcrumbLink href="/bible">Kinh Thánh</BreadcrumbLink>
          ) : (
            <BreadcrumbPage>Kinh Thánh</BreadcrumbPage>
          )}
        </BreadcrumbItem>
        {book && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {chapter ? (
                <BreadcrumbLink href={`/bible/${book.id}`}>
                  {book.name}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{book.name}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </>
        )}
        {chapter && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Chương {chapter}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

interface ChapterNavigationProps {
  bookId: string;
  currentChapter: number;
  totalChapters: number;
}

export function ChapterNavigation({
  bookId,
  currentChapter,
  totalChapters,
}: ChapterNavigationProps) {
  const hasPrev = currentChapter > 1;
  const hasNext = currentChapter < totalChapters;

  return (
    <div className="flex items-center justify-between gap-4">
      {hasPrev ? (
        <Link href={`/bible/${bookId}/${currentChapter - 1}`}>
          <Button variant="outline" size="sm">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Chương {currentChapter - 1}
          </Button>
        </Link>
      ) : (
        <div />
      )}

      <span className="text-sm text-muted-foreground">
        Chương {currentChapter} / {totalChapters}
      </span>

      {hasNext ? (
        <Link href={`/bible/${bookId}/${currentChapter + 1}`}>
          <Button variant="outline" size="sm">
            Chương {currentChapter + 1}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
