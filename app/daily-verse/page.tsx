import Link from "next/link";
import { Metadata } from "next";
import { ScriptureCard } from "@/components/bible/scripture-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Share2,
  BookOpen,
  RefreshCw,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Câu Gốc Hàng Ngày - Kinh Thánh",
  description: "Suy niệm Lời Chúa mỗi ngày với câu gốc được chọn lọc",
};

// Mock daily verses
const dailyVerses = [
  {
    verse:
      "CHÚA là mục tử chăn dắt tôi, tôi chẳng thiếu thốn gì. Trong đồng cỏ xanh tươi, Người cho tôi nằm nghỉ. Người đưa tôi tới dòng nước trong lành và bổ sức cho tôi.",
    reference: "Thánh Vịnh 23:1-3",
    reflection:
      "Thiên Chúa như người mục tử tốt lành, luôn chăm sóc và dẫn dắt chúng ta qua mọi hoàn cảnh của cuộc sống. Hãy tin tưởng vào sự quan phòng của Ngài.",
    bookSlug: "psalms",
    chapter: 23,
  },
  {
    verse:
      "Thiên Chúa yêu thế gian đến nỗi đã ban Con Một, để ai tin vào Con của Người thì khỏi phải chết, nhưng được sống muôn đời.",
    reference: "Gio-an 3:16",
    reflection:
      "Đây là tình yêu vô điều kiện của Thiên Chúa dành cho nhân loại. Qua Đức Giêsu, chúng ta được mời gọi đón nhận ơn cứu độ và sống trong tình yêu ấy.",
    bookSlug: "john",
    chapter: 3,
  },
  {
    verse:
      "Anh em đừng lo lắng gì cả. Nhưng trong mọi hoàn cảnh, anh em cứ đem lời cầu khẩn, van xin và tạ ơn, mà giãi bày trước mặt Thiên Chúa những điều anh em thỉnh nguyện.",
    reference: "Phi-líp-phê 4:6",
    reflection:
      "Trong cuộc sống đầy lo âu, thánh Phaolô mời gọi chúng ta đặt mọi sự trong tay Chúa qua lời cầu nguyện. Sự bình an đến từ việc tin tưởng phó thác.",
    bookSlug: "philippians",
    chapter: 4,
  },
];

// Get verse based on day of year
function getDailyVerse() {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dailyVerses[dayOfYear % dailyVerses.length];
}

export default function DailyVersePage() {
  const todayVerse = getDailyVerse();
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-primary/5 via-background to-background">
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

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Câu Gốc Hàng Ngày</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{today}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Scripture Card */}
        <div className="mb-8">
          <ScriptureCard
            verse={todayVerse.verse}
            reference={todayVerse.reference}
            reflection={todayVerse.reflection}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href={`/bible/${todayVerse.bookSlug}/${todayVerse.chapter}`}>
            <Button className="gap-2">
              <BookOpen className="h-4 w-4" />
              Đọc toàn bộ chương
            </Button>
          </Link>
          <Button variant="outline" className="gap-2">
            <Share2 className="h-4 w-4" />
            Chia sẻ
          </Button>
        </div>

        {/* Previous verses */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            Các câu gốc khác
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {dailyVerses
              .filter((v) => v.reference !== todayVerse.reference)
              .map((verse, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <p className="text-muted-foreground line-clamp-3 mb-3 italic">
                      &ldquo;{verse.verse}&rdquo;
                    </p>
                    <p className="text-primary font-medium text-sm">
                      — {verse.reference}
                    </p>
                    <Link
                      href={`/bible/${verse.bookSlug}/${verse.chapter}`}
                      className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      Đọc thêm
                      <BookOpen className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
