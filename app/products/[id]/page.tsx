"use client";

import React from "react";
import BookDetails from "@/components/products/BookDetails";
import RelatedBooks from "@/components/products/RelatedBooks";
import Review from "@/components/products/Review";

import {
  useGetBooksByIdQuery,
  useGetRelatedBooksQuery,
} from "@/redux/api/bookApi";
import { useParams } from "next/navigation";
import AuthLoader from "@/components/Loaders/AuthLoader";

export default function Page() {
  const { id } = useParams();
  const { data: book, isLoading, error } = useGetBooksByIdQuery(id);
  const { data: relatedBooks } = useGetRelatedBooksQuery(id);
  if (isLoading) {
    return <AuthLoader />;
  }
  if (!book || error) {
    return <div>Error</div>;
  }

  return (
    <section className="min-h-screen pt-5 pb-12">
      {/* Book Info & Related Books */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl py-8">
        <BookDetails book={book} />
        <div className="md:col-span-1 p-4">
          <h1 className="font-bold text-xl md:text-2xl mb-4">Related Books</h1>
          <div className="grid gap-3">
            {relatedBooks?.map((relatedBook, index) => (
              <RelatedBooks key={index} relatedBook={relatedBook} />
            ))}
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="container mx-auto shadow-2xl mt-10">
        <Review id={book._id} />
      </div>
    </section>
  );
}
