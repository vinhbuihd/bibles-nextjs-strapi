import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookBySlug, categoryNames } from "@/services/bible";
import { BibleBreadcrumb } from "@/components/bible/bible-nav";
import { ChapterGrid } from "@/components/bible/chapter-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface BookPageProps {
  params: Promise<{
    bookId: string;
  }>;
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { bookId } = await params;
  const book = await getBookBySlug(bookId);

  if (!book) {
    return {
      title: "Không tìm thấy sách",
    };
  }

  return {
    title: `${book.name} - Kinh Thánh`,
    description: `Đọc sách ${book.name} trong Kinh Thánh Công Giáo`,
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { bookId } = await params;
  const book = await getBookBySlug(bookId);

  if (!book) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto py-6 space-y-6">
      <BibleBreadcrumb book={book} />

      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
              <CardTitle className="text-2xl">{book.name}</CardTitle>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  {book.testamentName || book.testament}
                </Badge>
                <Badge variant="outline">
                  {categoryNames[book.category] || book.category}
                </Badge>
                <Badge variant="outline">{book.chapters} chương</Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Viết tắt: <strong>{book.shortName}</strong>
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Chọn chương để đọc</h2>
        <ChapterGrid bookId={book.id} totalChapters={book.chapters} />
      </div>
    </div>
  );
}
