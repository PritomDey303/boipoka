"use client";

import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa";
import BookCard from "../common/BookCard";

interface Book {
  id: number;
  title_bn: string;
  title_en: string;
  author_bn: string;
  author_en: string;
  category: string;
  tags: string[];
  price: number;
  discount_price: number;
  language: string;
  cover_image: string;
  description: string;
  publication: string;
}

interface BooksPreviewProps {
  title: string;
  category: string;
  books: Book[];
}

export default function BooksPreview({
  title,
  category,
  books,
}: BooksPreviewProps) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-9/10 mx-auto px-5 py-6 bg-white text-gray-900 shadow-xl rounded-xl mb-10">
      <div className="flex gap-3 justify-start items-center">
        <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
        <Link
          href={`/products?search=${category}&data_from=category&page=1`}
          className="link link-hover flex justify-center items-center text-blue-500 gap-1 text-xs md:text-lg"
        >
          <span>সবগুলো দেখুন</span> <FaArrowRight />
        </Link>
      </div>
      <Slider {...settings} className="py-8">
        {books.map((book) => (
          <div key={book.id} className="px-2">
            <BookCard book={book} />
          </div>
        ))}
      </Slider>
    </section>
  );
}
