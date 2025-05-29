import BooksPreview from "@/components/home/BooksPreview";
import FamousWriters from "@/components/home/FamousWriters";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="py-3">
      <Hero />
      <FamousWriters />
      <BooksPreview title="নতুন বইসমুহ" dataFrom="category" search="Novel" />
      <BooksPreview title="বেস্ট সেলার" dataFrom="tags" search="best seller" />
      <BooksPreview title="উপন্যাস" search="Novel" dataFrom="category" />
      <BooksPreview title="নাটক" search="Drama" dataFrom="category" />
    </div>
  );
}
