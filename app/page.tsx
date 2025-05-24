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
      <BooksPreview
        title="নতুন বইসমুহ"
        dataFrom="category"
        search="Novel"
        books={books}
      />
      <BooksPreview
        title="বেস্ট সেলার"
        dataFrom="tags"
        search="best seller"
        books={bestSellerBooks}
      />
      <BooksPreview
        title="উপন্যাস"
        search="Novel"
        dataFrom="category"
        books={novels}
      />
      <BooksPreview
        title="নাটক"
        search="Drama"
        dataFrom="category"
        books={dramaBooks}
      />
    </div>
  );
}
