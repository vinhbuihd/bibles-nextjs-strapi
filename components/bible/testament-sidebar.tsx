"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Book, Testament } from "@/types/bible";
import { BookCard } from "@/components/bible/book-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronRight } from "lucide-react";

interface TestamentSidebarProps {
  testaments: Testament[];
  booksByTestament: Record<string, Book[]>;
  defaultTestament?: string;
}

export function TestamentSidebar({
  testaments,
  booksByTestament,
  defaultTestament,
}: TestamentSidebarProps) {
  const [selectedTestament, setSelectedTestament] = useState(
    defaultTestament || testaments[0]?.slug || ""
  );

  const currentBooks = booksByTestament[selectedTestament] || [];

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Phân loại
          </h2>
          <nav className="space-y-1">
            {testaments.map((testament) => {
              const count = booksByTestament[testament.slug]?.length || 0;
              const isActive = selectedTestament === testament.slug;

              return (
                <button
                  key={testament.slug}
                  onClick={() => setSelectedTestament(testament.slug)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  <span className="font-medium">
                    {testament.name.replace("Kinh Thánh ", "")}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    {count} sách
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Quick stats */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Tổng cộng:{" "}
              <span className="font-semibold text-foreground">
                {Object.values(booksByTestament).flat().length} sách
              </span>
            </p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">
            {testaments.find((t) => t.slug === selectedTestament)?.name ||
              "Danh sách sách"}
          </h2>
          <p className="text-muted-foreground mt-1">
            {currentBooks.length} sách
          </p>
        </div>

        {currentBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentBooks.map((book) => (
              <Link key={book.id} href={`/bible/${book.id}`}>
                <div className="group p-4 rounded-lg border bg-card hover:bg-accent transition-colors cursor-pointer h-full">
                  <div className="flex items-start justify-between gap-2">
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {book.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {book.shortName} • {book.chapters} chương
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>Chưa có sách nào trong phần này.</p>
          </div>
        )}
      </main>
    </div>
  );
}
