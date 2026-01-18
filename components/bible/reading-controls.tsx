"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import {
  Settings2,
  Type,
  AlignLeft,
  AlignJustify,
  Minus,
  Plus,
  Sun,
  Moon,
  BookOpen,
  List,
} from "lucide-react";

export type DisplayMode = "default" | "compact" | "study";

interface ReadingControlsProps {
  displayMode: DisplayMode;
  onDisplayModeChange: (mode: DisplayMode) => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  className?: string;
}

export function ReadingControls({
  displayMode,
  onDisplayModeChange,
  fontSize,
  onFontSizeChange,
  className,
}: ReadingControlsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Display Mode Toggle */}
      <div className="flex items-center bg-muted rounded-lg p-1">
        <Button
          variant={displayMode === "default" ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-3"
          onClick={() => onDisplayModeChange("default")}
        >
          <List className="h-4 w-4 mr-1.5" />
          <span className="hidden sm:inline">Từng câu</span>
        </Button>
        <Button
          variant={displayMode === "compact" ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-3"
          onClick={() => onDisplayModeChange("compact")}
        >
          <AlignJustify className="h-4 w-4 mr-1.5" />
          <span className="hidden sm:inline">Liên tục</span>
        </Button>
        <Button
          variant={displayMode === "study" ? "secondary" : "ghost"}
          size="sm"
          className="h-8 px-3"
          onClick={() => onDisplayModeChange("study")}
        >
          <BookOpen className="h-4 w-4 mr-1.5" />
          <span className="hidden sm:inline">Học tập</span>
        </Button>
      </div>

      {/* Font Size Control */}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 gap-1.5">
            <Type className="h-4 w-4" />
            <span className="hidden sm:inline">Cỡ chữ</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56" align="end">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Cỡ chữ</span>
              <span className="text-sm text-muted-foreground">{fontSize}px</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onFontSizeChange(Math.max(14, fontSize - 2))}
                disabled={fontSize <= 14}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Slider
                value={[fontSize]}
                onValueChange={([value]) => onFontSizeChange(value)}
                min={14}
                max={28}
                step={2}
                className="flex-1"
              />
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onFontSizeChange(Math.min(28, fontSize + 2))}
                disabled={fontSize >= 28}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Điều chỉnh cỡ chữ để dễ đọc hơn
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// Chapter Header with decorative elements
interface ChapterHeaderProps {
  bookName: string;
  chapter: number;
  testament?: string;
}

export function ChapterHeader({ bookName, chapter, testament }: ChapterHeaderProps) {
  return (
    <div className="text-center py-8 space-y-4">
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
        <div className="h-2 w-2 rounded-full bg-primary/40" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
      </div>

      {/* Testament badge */}
      {testament && (
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {testament}
        </span>
      )}

      {/* Book name */}
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground tracking-tight">
        {bookName}
      </h1>

      {/* Chapter number */}
      <div className="flex items-center justify-center gap-3">
        <div className="h-px flex-1 max-w-[100px] bg-border" />
        <span className="text-lg font-medium text-muted-foreground">
          Chương {chapter}
        </span>
        <div className="h-px flex-1 max-w-[100px] bg-border" />
      </div>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30" />
        <div className="h-2 w-2 rounded-full bg-primary/40" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30" />
      </div>
    </div>
  );
}

// Progress indicator
interface ReadingProgressProps {
  current: number;
  total: number;
}

export function ReadingProgress({ current, total }: ReadingProgressProps) {
  const progress = (current / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
      <div
        className="h-full bg-primary transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
