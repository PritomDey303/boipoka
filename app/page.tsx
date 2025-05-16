import BooksPreview from "@/components/home/BooksPreview";
import FamousWriters from "@/components/home/FamousWriters";
import { books } from "@/helper/books";
import Hero from "@/components/home/Hero";

export default function Home() {
  const bestSellerBooks = books.filter((book) => {
    return book.tags.includes("best seller");
  });

  let novels = books.filter((book) => {
    return book.category === "Novel";
  });

  novels = novels.sort(() => Math.random() - 0.5);
  //drama
  let dramaBooks = books.filter((books) => books.category === "Drama");
  dramaBooks = dramaBooks.sort(() => Math.random() - 0.5);
  return (
    <div className="py-3">
      <Hero />
      <FamousWriters />
      <BooksPreview title="নতুন বইসমুহ" category="Novel" books={books} />
      <BooksPreview
        title="বেস্ট সেলার"
        category="best seller"
        books={bestSellerBooks}
      />
      <BooksPreview title="উপন্যাস" category="Novel" books={novels} />
      <BooksPreview title="নাটক" category="Drama" books={dramaBooks} />
    </div>
  );
}
