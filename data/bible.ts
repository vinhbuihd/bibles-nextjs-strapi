// Kinh Thánh Công Giáo - Dữ liệu các sách

export type Testament = "old" | "new";

export type BookCategory =
  | "pentateuch" // Ngũ Thư
  | "historical" // Lịch sử
  | "wisdom" // Giáo huấn
  | "prophets" // Ngôn sứ
  | "gospels" // Tin Mừng
  | "acts" // Công vụ
  | "letters" // Thư
  | "revelation"; // Khải huyền

export interface Book {
  id: string;
  name: string;
  shortName: string;
  testament: Testament;
  category: BookCategory;
  chapters: number;
}

export interface Verse {
  number: number;
  text: string;
}

export interface Chapter {
  bookId: string;
  chapter: number;
  verses: Verse[];
}

// Danh sách các sách Cựu Ước
export const oldTestamentBooks: Book[] = [
  // Ngũ Thư (5 sách)
  { id: "genesis", name: "Sáng Thế", shortName: "St", testament: "old", category: "pentateuch", chapters: 50 },
  { id: "exodus", name: "Xuất Hành", shortName: "Xh", testament: "old", category: "pentateuch", chapters: 40 },
  { id: "leviticus", name: "Lê-vi", shortName: "Lv", testament: "old", category: "pentateuch", chapters: 27 },
  { id: "numbers", name: "Dân Số", shortName: "Ds", testament: "old", category: "pentateuch", chapters: 36 },
  { id: "deuteronomy", name: "Đệ Nhị Luật", shortName: "Đnl", testament: "old", category: "pentateuch", chapters: 34 },

  // Lịch sử (16 sách)
  { id: "joshua", name: "Giô-suê", shortName: "Gs", testament: "old", category: "historical", chapters: 24 },
  { id: "judges", name: "Thủ Lãnh", shortName: "Tl", testament: "old", category: "historical", chapters: 21 },
  { id: "ruth", name: "Rút", shortName: "R", testament: "old", category: "historical", chapters: 4 },
  { id: "1samuel", name: "1 Sa-mu-en", shortName: "1Sm", testament: "old", category: "historical", chapters: 31 },
  { id: "2samuel", name: "2 Sa-mu-en", shortName: "2Sm", testament: "old", category: "historical", chapters: 24 },
  { id: "1kings", name: "1 Các Vua", shortName: "1V", testament: "old", category: "historical", chapters: 22 },
  { id: "2kings", name: "2 Các Vua", shortName: "2V", testament: "old", category: "historical", chapters: 25 },
  { id: "1chronicles", name: "1 Sử Biên", shortName: "1Sb", testament: "old", category: "historical", chapters: 29 },
  { id: "2chronicles", name: "2 Sử Biên", shortName: "2Sb", testament: "old", category: "historical", chapters: 36 },
  { id: "ezra", name: "Ét-ra", shortName: "Er", testament: "old", category: "historical", chapters: 10 },
  { id: "nehemiah", name: "Nơ-khe-mi-a", shortName: "Nkm", testament: "old", category: "historical", chapters: 13 },
  { id: "tobit", name: "Tô-bi-a", shortName: "Tb", testament: "old", category: "historical", chapters: 14 },
  { id: "judith", name: "Giu-đi-tha", shortName: "Gđt", testament: "old", category: "historical", chapters: 16 },
  { id: "esther", name: "Ét-te", shortName: "Et", testament: "old", category: "historical", chapters: 10 },
  { id: "1maccabees", name: "1 Ma-ca-bê", shortName: "1Mcb", testament: "old", category: "historical", chapters: 16 },
  { id: "2maccabees", name: "2 Ma-ca-bê", shortName: "2Mcb", testament: "old", category: "historical", chapters: 15 },

  // Giáo huấn (7 sách)
  { id: "job", name: "Gióp", shortName: "G", testament: "old", category: "wisdom", chapters: 42 },
  { id: "psalms", name: "Thánh Vịnh", shortName: "Tv", testament: "old", category: "wisdom", chapters: 150 },
  { id: "proverbs", name: "Châm Ngôn", shortName: "Cn", testament: "old", category: "wisdom", chapters: 31 },
  { id: "ecclesiastes", name: "Giảng Viên", shortName: "Gv", testament: "old", category: "wisdom", chapters: 12 },
  { id: "songofsongs", name: "Diễm Ca", shortName: "Dc", testament: "old", category: "wisdom", chapters: 8 },
  { id: "wisdom", name: "Khôn Ngoan", shortName: "Kn", testament: "old", category: "wisdom", chapters: 19 },
  { id: "sirach", name: "Huấn Ca", shortName: "Hc", testament: "old", category: "wisdom", chapters: 51 },

  // Ngôn sứ (18 sách)
  { id: "isaiah", name: "I-sai-a", shortName: "Is", testament: "old", category: "prophets", chapters: 66 },
  { id: "jeremiah", name: "Giê-rê-mi-a", shortName: "Gr", testament: "old", category: "prophets", chapters: 52 },
  { id: "lamentations", name: "Ai Ca", shortName: "Ac", testament: "old", category: "prophets", chapters: 5 },
  { id: "baruch", name: "Ba-rúc", shortName: "Br", testament: "old", category: "prophets", chapters: 6 },
  { id: "ezekiel", name: "Ê-dê-ki-en", shortName: "Ed", testament: "old", category: "prophets", chapters: 48 },
  { id: "daniel", name: "Đa-ni-en", shortName: "Đn", testament: "old", category: "prophets", chapters: 14 },
  { id: "hosea", name: "Hô-sê", shortName: "Hs", testament: "old", category: "prophets", chapters: 14 },
  { id: "joel", name: "Giô-en", shortName: "Ge", testament: "old", category: "prophets", chapters: 4 },
  { id: "amos", name: "A-mốt", shortName: "Am", testament: "old", category: "prophets", chapters: 9 },
  { id: "obadiah", name: "Ô-va-đi-a", shortName: "Ôv", testament: "old", category: "prophets", chapters: 1 },
  { id: "jonah", name: "Giô-na", shortName: "Gn", testament: "old", category: "prophets", chapters: 4 },
  { id: "micah", name: "Mi-kha", shortName: "Mk", testament: "old", category: "prophets", chapters: 7 },
  { id: "nahum", name: "Na-khum", shortName: "Nk", testament: "old", category: "prophets", chapters: 3 },
  { id: "habakkuk", name: "Kha-ba-cúc", shortName: "Kb", testament: "old", category: "prophets", chapters: 3 },
  { id: "zephaniah", name: "Xô-phô-ni-a", shortName: "Xp", testament: "old", category: "prophets", chapters: 3 },
  { id: "haggai", name: "Khác-gai", shortName: "Kg", testament: "old", category: "prophets", chapters: 2 },
  { id: "zechariah", name: "Da-ca-ri-a", shortName: "Dcr", testament: "old", category: "prophets", chapters: 14 },
  { id: "malachi", name: "Ma-la-khi", shortName: "Ml", testament: "old", category: "prophets", chapters: 3 },
];

// Danh sách các sách Tân Ước
export const newTestamentBooks: Book[] = [
  // Tin Mừng (4 sách)
  { id: "matthew", name: "Mát-thêu", shortName: "Mt", testament: "new", category: "gospels", chapters: 28 },
  { id: "mark", name: "Mác-cô", shortName: "Mc", testament: "new", category: "gospels", chapters: 16 },
  { id: "luke", name: "Lu-ca", shortName: "Lc", testament: "new", category: "gospels", chapters: 24 },
  { id: "john", name: "Gio-an", shortName: "Ga", testament: "new", category: "gospels", chapters: 21 },

  // Công vụ (1 sách)
  { id: "acts", name: "Công Vụ Tông Đồ", shortName: "Cv", testament: "new", category: "acts", chapters: 28 },

  // Thư (21 sách)
  { id: "romans", name: "Rô-ma", shortName: "Rm", testament: "new", category: "letters", chapters: 16 },
  { id: "1corinthians", name: "1 Cô-rin-tô", shortName: "1Cr", testament: "new", category: "letters", chapters: 16 },
  { id: "2corinthians", name: "2 Cô-rin-tô", shortName: "2Cr", testament: "new", category: "letters", chapters: 13 },
  { id: "galatians", name: "Ga-lát", shortName: "Gl", testament: "new", category: "letters", chapters: 6 },
  { id: "ephesians", name: "Ê-phê-xô", shortName: "Ep", testament: "new", category: "letters", chapters: 6 },
  { id: "philippians", name: "Phi-líp-phê", shortName: "Pl", testament: "new", category: "letters", chapters: 4 },
  { id: "colossians", name: "Cô-lô-xê", shortName: "Cl", testament: "new", category: "letters", chapters: 4 },
  { id: "1thessalonians", name: "1 Thê-xa-lô-ni-ca", shortName: "1Tx", testament: "new", category: "letters", chapters: 5 },
  { id: "2thessalonians", name: "2 Thê-xa-lô-ni-ca", shortName: "2Tx", testament: "new", category: "letters", chapters: 3 },
  { id: "1timothy", name: "1 Ti-mô-thê", shortName: "1Tm", testament: "new", category: "letters", chapters: 6 },
  { id: "2timothy", name: "2 Ti-mô-thê", shortName: "2Tm", testament: "new", category: "letters", chapters: 4 },
  { id: "titus", name: "Ti-tô", shortName: "Tt", testament: "new", category: "letters", chapters: 3 },
  { id: "philemon", name: "Phi-lê-môn", shortName: "Plm", testament: "new", category: "letters", chapters: 1 },
  { id: "hebrews", name: "Do Thái", shortName: "Dt", testament: "new", category: "letters", chapters: 13 },
  { id: "james", name: "Gia-cô-bê", shortName: "Gc", testament: "new", category: "letters", chapters: 5 },
  { id: "1peter", name: "1 Phê-rô", shortName: "1Pr", testament: "new", category: "letters", chapters: 5 },
  { id: "2peter", name: "2 Phê-rô", shortName: "2Pr", testament: "new", category: "letters", chapters: 3 },
  { id: "1john", name: "1 Gio-an", shortName: "1Ga", testament: "new", category: "letters", chapters: 5 },
  { id: "2john", name: "2 Gio-an", shortName: "2Ga", testament: "new", category: "letters", chapters: 1 },
  { id: "3john", name: "3 Gio-an", shortName: "3Ga", testament: "new", category: "letters", chapters: 1 },
  { id: "jude", name: "Giu-đa", shortName: "Gđ", testament: "new", category: "letters", chapters: 1 },

  // Khải huyền (1 sách)
  { id: "revelation", name: "Khải Huyền", shortName: "Kh", testament: "new", category: "revelation", chapters: 22 },
];

// Tất cả các sách
export const allBooks: Book[] = [...oldTestamentBooks, ...newTestamentBooks];

// Helper functions
export function getBookById(id: string): Book | undefined {
  return allBooks.find((book) => book.id === id);
}

export function getBooksByTestament(testament: Testament): Book[] {
  return allBooks.filter((book) => book.testament === testament);
}

export function getBooksByCategory(category: BookCategory): Book[] {
  return allBooks.filter((book) => book.category === category);
}

// Tên categories tiếng Việt
export const categoryNames: Record<BookCategory, string> = {
  pentateuch: "Ngũ Thư",
  historical: "Lịch Sử",
  wisdom: "Giáo Huấn",
  prophets: "Ngôn Sứ",
  gospels: "Tin Mừng",
  acts: "Công Vụ",
  letters: "Thư",
  revelation: "Khải Huyền",
};

// Tên testament tiếng Việt
export const testamentNames: Record<Testament, string> = {
  old: "Cựu Ước",
  new: "Tân Ước",
};
