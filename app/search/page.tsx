"use client";

import { useState } from "react";
import Link from "next/link";
import { SearchInput, SearchResult } from "@/components/bible/search-input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, ArrowLeft } from "lucide-react";

// Mock search data
const mockSearchResults = [
  {
    id: 1,
    verse:
      "CHÚA là mục tử chăn dắt tôi, tôi chẳng thiếu thốn gì. Trong đồng cỏ xanh tươi, Người cho tôi nằm nghỉ.",
    reference: "Thánh Vịnh 23:1-2",
    bookSlug: "psalms",
    chapter: 23,
    verseNumber: 1,
  },
  {
    id: 2,
    verse:
      "Lúc khởi đầu đã có Ngôi Lời. Ngôi Lời vẫn hướng về Thiên Chúa, và Ngôi Lời là Thiên Chúa.",
    reference: "Gio-an 1:1",
    bookSlug: "john",
    chapter: 1,
    verseNumber: 1,
  },
  {
    id: 3,
    verse:
      "Thiên Chúa yêu thế gian đến nỗi đã ban Con Một, để ai tin vào Con của Người thì khỏi phải chết, nhưng được sống muôn đời.",
    reference: "Gio-an 3:16",
    bookSlug: "john",
    chapter: 3,
    verseNumber: 16,
  },
  {
    id: 4,
    verse:
      "Phúc thay ai có tâm hồn nghèo khó, vì Nước Trời là của họ.",
    reference: "Mát-thêu 5:3",
    bookSlug: "matthew",
    chapter: 5,
    verseNumber: 3,
  },
  {
    id: 5,
    verse:
      "Chính anh em là muối cho đời. Nhưng muối mà nhạt đi, thì lấy gì muối nó cho mặn lại?",
    reference: "Mát-thêu 5:13",
    bookSlug: "matthew",
    chapter: 5,
    verseNumber: 13,
  },
  {
    id: 6,
    verse:
      "Lúc khởi đầu, Thiên Chúa sáng tạo trời đất.",
    reference: "Sáng Thế 1:1",
    bookSlug: "genesis",
    chapter: 1,
    verseNumber: 1,
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof mockSearchResults>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setHasSearched(true);

    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    // Mock search - filter results based on query
    const filtered = mockSearchResults.filter(
      (item) =>
        item.verse.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.reference.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Trang chủ
        </Link>

        <h1 className="text-3xl font-bold mb-2">Tìm kiếm Kinh Thánh</h1>
        <p className="text-muted-foreground">
          Tìm kiếm câu, từ khóa hoặc địa chỉ trong Kinh Thánh
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-8">
        <SearchInput
          onSearch={handleSearch}
          placeholder="Nhập từ khóa, ví dụ: yêu thương, Gio-an 3:16..."
          className="max-w-2xl"
        />
      </div>

      {/* Results */}
      <div className="space-y-4">
        {hasSearched && query && (
          <p className="text-sm text-muted-foreground">
            {results.length > 0
              ? `Tìm thấy ${results.length} kết quả cho "${query}"`
              : `Không tìm thấy kết quả cho "${query}"`}
          </p>
        )}

        {results.length > 0 && (
          <div className="space-y-3">
            {results.map((result) => (
              <SearchResult
                key={result.id}
                verse={result.verse}
                reference={result.reference}
                bookSlug={result.bookSlug}
                chapter={result.chapter}
                verseNumber={result.verseNumber}
                highlight={query}
              />
            ))}
          </div>
        )}

        {hasSearched && query && results.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Không tìm thấy kết quả
              </h3>
              <p className="text-muted-foreground mb-4">
                Thử tìm kiếm với từ khóa khác hoặc kiểm tra chính tả.
              </p>
              <Button variant="outline" onClick={() => handleSearch("")}>
                Xóa tìm kiếm
              </Button>
            </CardContent>
          </Card>
        )}

        {!hasSearched && (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Bắt đầu tìm kiếm
              </h3>
              <p className="text-muted-foreground">
                Nhập từ khóa hoặc địa chỉ câu (ví dụ: "Gio-an 3:16") để tìm
                kiếm trong Kinh Thánh.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Popular searches */}
      {!hasSearched && (
        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-4">Tìm kiếm phổ biến</h2>
          <div className="flex flex-wrap gap-2">
            {["yêu thương", "tha thứ", "đức tin", "hy vọng", "bình an", "khôn ngoan"].map(
              (term) => (
                <Button
                  key={term}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSearch(term)}
                >
                  {term}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
