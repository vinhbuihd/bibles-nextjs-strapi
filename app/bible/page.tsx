import { Metadata } from "next";
import { getAllBooks, getAllTestaments } from "@/services/bible";
import { Book } from "@/types/bible";
import { BibleBreadcrumb } from "@/components/bible/bible-nav";
import { TestamentSidebar } from "@/components/bible/testament-sidebar";

export const metadata: Metadata = {
  title: "Kinh Thánh - Danh sách các sách",
  description: "Danh sách các sách trong Kinh Thánh Công Giáo",
};

interface BiblePageProps {
  searchParams: Promise<{ tab?: string }>;
}

export default async function BiblePage({ searchParams }: BiblePageProps) {
  const { tab } = await searchParams;

  const [allBooks, testaments] = await Promise.all([
    getAllBooks(),
    getAllTestaments(),
  ]);

  // Group books by testament
  const booksByTestament: Record<string, Book[]> = {};
  testaments.forEach((testament) => {
    booksByTestament[testament.slug] = allBooks.filter(
      (book) => book.testament === testament.slug
    );
  });

  // Default testament from URL or first one
  const defaultTestament = tab || testaments[0]?.slug || "";

  return (
    <div className="container max-w-6xl mx-auto py-6 space-y-6">
      <BibleBreadcrumb />

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Kinh Thánh</h1>
        <p className="text-muted-foreground">
          Kinh Thánh Công Giáo gồm {allBooks.length} sách
          {testaments.length > 0 &&
            `: ${testaments
              .map(
                (t) =>
                  `${booksByTestament[t.slug]?.length || 0} sách ${t.name.replace("Kinh Thánh ", "")}`
              )
              .join(" và ")}`}
        </p>
      </div>

      {testaments.length > 0 ? (
        <TestamentSidebar
          testaments={testaments}
          booksByTestament={booksByTestament}
          defaultTestament={defaultTestament}
        />
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>Chưa có dữ liệu.</p>
        </div>
      )}
    </div>
  );
}
