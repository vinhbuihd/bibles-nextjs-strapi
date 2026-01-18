"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export function SearchInput({
  placeholder = "Tìm kiếm trong Kinh Thánh...",
  onSearch,
  className,
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="pl-12 pr-20 h-14 text-lg rounded-full border-2 focus:border-primary"
      />
      {query && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className="absolute right-14 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      <Button
        type="submit"
        size="sm"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-4"
      >
        Tìm
      </Button>
    </form>
  );
}

interface SearchResultProps {
  verse: string;
  reference: string;
  bookSlug: string;
  chapter: number;
  verseNumber: number;
  highlight?: string;
}

export function SearchResult({
  verse,
  reference,
  bookSlug,
  chapter,
  verseNumber,
  highlight,
}: SearchResultProps) {
  const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 dark:bg-yellow-800 rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <a
      href={`/bible/${bookSlug}/${chapter}#verse-${verseNumber}`}
      className="block p-4 rounded-lg border hover:bg-accent transition-colors"
    >
      <p className="text-sm font-semibold text-primary mb-2">{reference}</p>
      <p className="text-muted-foreground leading-relaxed line-clamp-3">
        {highlight ? highlightText(verse, highlight) : verse}
      </p>
    </a>
  );
}
