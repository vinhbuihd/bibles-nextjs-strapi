"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Copy, Check, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface VerseProps {
  number: number;
  text: string;
  highlighted?: boolean;
  bookName?: string;
  chapter?: number;
  onSelect?: (number: number) => void;
  displayMode?: "default" | "compact" | "study";
}

export function Verse({
  number,
  text,
  highlighted,
  bookName,
  chapter,
  onSelect,
  displayMode = "default",
}: VerseProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const reference = bookName && chapter ? `${bookName} ${chapter}:${number}` : "";
    const textToCopy = reference ? `"${text}" — ${reference}` : text;

    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (displayMode === "compact") {
    return (
      <span
        id={`verse-${number}`}
        className={cn(
          "inline",
          highlighted && "bg-amber-100 dark:bg-amber-900/30 rounded px-1"
        )}
      >
        <sup className="text-primary/60 font-semibold text-xs mr-1 select-none">
          {number}
        </sup>
        <span className="text-foreground">{text} </span>
      </span>
    );
  }

  return (
    <div
      id={`verse-${number}`}
      className={cn(
        "group relative flex gap-4 py-3 px-4 rounded-xl transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent",
        highlighted && "bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500",
        isHovered && "shadow-sm"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect?.(number)}
    >
      {/* Verse Number */}
      <span
        className={cn(
          "font-serif font-bold min-w-[2.5rem] text-right transition-all duration-300",
          "text-xl",
          highlighted ? "text-amber-600 dark:text-amber-400" : "text-primary/50",
          "group-hover:text-primary group-hover:scale-110"
        )}
      >
        {number}
      </span>

      {/* Verse Text */}
      <p
        className={cn(
          "flex-1 leading-loose tracking-wide",
          "text-foreground/90",
          "selection:bg-primary/20 selection:text-primary-foreground",
          displayMode === "study" ? "text-xl" : "text-lg",
          "font-serif"
        )}
      >
        {text}
      </p>

      {/* Action Buttons - Show on hover */}
      <div
        className={cn(
          "absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        )}
      >
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={handleCopy}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{copied ? "Đã sao chép!" : "Sao chép câu"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

interface VerseListProps {
  verses: Array<{ number: number; text: string }>;
  highlightedVerse?: number;
  onVerseSelect?: (number: number) => void;
  className?: string;
  bookName?: string;
  chapter?: number;
  displayMode?: "default" | "compact" | "study";
}

export function VerseListComponent({
  verses,
  highlightedVerse,
  onVerseSelect,
  className,
  bookName,
  chapter,
  displayMode = "default",
}: VerseListProps) {
  if (displayMode === "compact") {
    return (
      <div className={cn("leading-loose text-lg font-serif tracking-wide", className)}>
        {verses.map((verse) => (
          <Verse
            key={verse.number}
            number={verse.number}
            text={verse.text}
            highlighted={highlightedVerse === verse.number}
            onSelect={onVerseSelect}
            bookName={bookName}
            chapter={chapter}
            displayMode="compact"
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-1", className)}>
      {verses.map((verse) => (
        <Verse
          key={verse.number}
          number={verse.number}
          text={verse.text}
          highlighted={highlightedVerse === verse.number}
          onSelect={onVerseSelect}
          bookName={bookName}
          chapter={chapter}
          displayMode={displayMode}
        />
      ))}
    </div>
  );
}

// Drop Cap for chapter opening
interface DropCapVerseProps {
  number: number;
  text: string;
  bookName?: string;
  chapter?: number;
}

export function DropCapVerse({ number, text, bookName, chapter }: DropCapVerseProps) {
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);

  return (
    <div id={`verse-${number}`} className="mb-6">
      <p className="text-lg font-serif leading-loose tracking-wide text-foreground/90">
        <sup className="text-primary/60 font-semibold text-xs mr-1">{number}</sup>
        <span
          className={cn(
            "float-left mr-3 mt-1",
            "text-6xl font-serif font-bold leading-none",
            "text-primary/80",
            "drop-shadow-sm"
          )}
        >
          {firstLetter}
        </span>
        {restOfText}
      </p>
    </div>
  );
}
