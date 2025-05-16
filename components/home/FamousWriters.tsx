"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import defaultImage from "@/public/images/default_human.jpg";
import { bengaliWriters } from "@/helper/Writters";

export default function FamousWriters() {
  const [fallbacks, setFallbacks] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (id: number) => {
    setFallbacks((prev) => ({ ...prev, [id]: true }));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white shadow-xl rounded-xl px-5 py-10 mb-10 w-9/10 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        প্রখ্যাত বাঙালি সাহিত্যিকগণ
      </h2>
      <Slider {...settings}>
        {bengaliWriters.map((writer) => {
          const imageSrc = fallbacks[writer.id] ? defaultImage : writer.image;
          return (
            <div key={writer.id} className="text-center px-3">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <Image
                  src={imageSrc}
                  alt={writer.name}
                  fill
                  className="rounded-full object-cover border-2 border-gray-300"
                  onError={() => handleImageError(writer.id)}
                  sizes="96px"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-800">
                {writer.name}
              </h3>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
