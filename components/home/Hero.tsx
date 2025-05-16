"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Hero() {
  const slides = [
    "https://i.ibb.co.com/TDc9Tc55/2023-09-09-64fc6cba8f387.jpg",
    "https://i.ibb.co.com/QjYyYkBs/2023-09-09-64fc6cc9ae8b6.jpg",
    "https://i.ibb.co.com/mFMKWbm8/2023-09-13-650188a54cd94.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <section className="py-1 px-2 max-w-screen-xl md:w-9/10 mx-auto">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div
            key={index}
            className="relative aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/1] rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
