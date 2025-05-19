import BookDetails from "@/components/products/BookDetails";
import RelatedBooks from "@/components/products/RelatedBooks";
import Review from "@/components/products/Review";
import { books } from "@/helper/books";
import { getRelatedBooks } from "@/helper/relatedBooks";
import { Book } from "@/interfaces/interface";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
  const bid = parseInt(params.id, 10);
  const book: Book | undefined = books.find((book) => book.id === bid);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-red-600">Book not found.</p>
      </div>
    );
  }

  const relatedBooks: Book[] = getRelatedBooks(book);

  return (
    <section className="min-h-screen pt-3 pb-10">
      <div className="w-9/10 md:w-8/10 bg-white mx-auto rounded-2xl shadow-xl mt-10 py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <BookDetails book={book} />
        <div className="w-full p-5 rounded-lg">
          <h1 className="font-bold text-xl md:text-2xl mb-5">Related Books</h1>
          <div className="grid gap-3">
            {relatedBooks.map((relatedBook, index) => (
              <RelatedBooks key={index} relatedBook={relatedBook} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-9/10 md:w-8/10 bg-white mx-auto rounded-2xl shadow-xl mt-10 py-10 px-5">
        <Review />
      </div>
    </section>
  );
}
