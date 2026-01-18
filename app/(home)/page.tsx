import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturedVerse } from "@/components/bible/scripture-card";
import {
  BookOpen,
  BookMarked,
  Search,
  ScrollText,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { getAllTestaments, getAllBooks } from "@/services/bible";

export const metadata = {
  title: "Kinh Thánh Online - Đọc Kinh Thánh Công Giáo",
  description: "Trang web đọc Kinh Thánh Công Giáo tiếng Việt trực tuyến",
};

export default async function HomePage() {
  const [testaments, books] = await Promise.all([
    getAllTestaments(),
    getAllBooks(),
  ]);

  const booksByTestament: Record<string, typeof books> = {};
  testaments.forEach((t) => {
    booksByTestament[t.slug] = books.filter((b) => b.testament === t.slug);
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary/5 via-background to-background py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Lời Chúa mỗi ngày
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Kinh Thánh
              <span className="text-primary"> Công Giáo</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Đọc và suy niệm Lời Chúa mỗi ngày. Kinh Thánh Công Giáo tiếng Việt
              với đầy đủ 73 sách.
            </p>
          </div>

          {/* Featured Verse */}
          <div className="py-8">
            <FeaturedVerse
              verse="CHÚA là mục tử chăn dắt tôi, tôi chẳng thiếu thốn gì. Trong đồng cỏ xanh tươi, Người cho tôi nằm nghỉ."
              reference="Thánh Vịnh 23:1-2"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bible">
              <Button size="lg" className="w-full sm:w-auto gap-2 h-12 px-8">
                <BookOpen className="h-5 w-5" />
                Đọc Kinh Thánh
              </Button>
            </Link>
            <Link href="/search">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 h-12 px-8"
              >
                <Search className="h-5 w-5" />
                Tìm kiếm
              </Button>
            </Link>
            <Link href="/daily-verse">
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto gap-2 h-12 px-8"
              >
                <Sparkles className="h-5 w-5" />
                Câu gốc hàng ngày
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testament Sections */}
      {testaments.length > 0 && (
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testaments.map((testament, index) => {
                const testamentBooks = booksByTestament[testament.slug] || [];
                const Icon = index === 0 ? BookMarked : ScrollText;

                return (
                  <Card
                    key={testament.slug}
                    className="overflow-hidden border-2 hover:border-primary/50 transition-colors"
                  >
                    <CardContent className="p-0">
                      <div className="p-6 bg-gradient-to-br from-primary/5 to-transparent">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold">
                              {testament.name.replace("Kinh Thánh ", "")}
                            </h2>
                            <p className="text-muted-foreground">
                              {testamentBooks.length} sách
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {testamentBooks.slice(0, 5).map((book) => (
                            <Link
                              key={book.id}
                              href={`/bible/${book.id}`}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-background/80 transition-colors group"
                            >
                              <span className="font-medium group-hover:text-primary transition-colors">
                                {book.name}
                              </span>
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                {book.chapters} chương
                                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </span>
                            </Link>
                          ))}
                        </div>

                        {testamentBooks.length > 5 && (
                          <Link
                            href={`/bible?tab=${testament.slug}`}
                            className="mt-4 inline-flex items-center gap-1 text-primary font-medium hover:underline"
                          >
                            Xem tất cả {testamentBooks.length} sách
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Recent/Popular Books */}
      {books.length > 0 && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Bắt đầu đọc</h2>
              <p className="text-muted-foreground">
                Những sách được đề xuất để bắt đầu hành trình với Lời Chúa
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {books.slice(0, 8).map((book) => (
                <Link key={book.id} href={`/bible/${book.id}`}>
                  <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all group">
                    <CardContent className="p-5 space-y-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {book.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {book.shortName} • {book.chapters} chương
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/bible">
                <Button variant="outline" size="lg" className="gap-2">
                  Xem tất cả sách
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {books.length === 0 && testaments.length === 0 && (
        <section className="py-16 px-4">
          <div className="container max-w-2xl mx-auto text-center">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Chưa có dữ liệu</h2>
            <p className="text-muted-foreground">
              Vui lòng thêm sách trong Strapi CMS để bắt đầu.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
