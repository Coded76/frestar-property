// pages/index.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// import {} from 'fr'
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const slides = [
  {
    id: 1,
    location: "LUGBE, ABUJA DISTRICT 1",
    title: "5 bedroom Duplex Ter.",
    price: "₦ 285,000,000",
    image: "/duplex.svg",
  },
  {
    id: 2,
    location: "LUGBE, ABUJA DISTRICT 1",
    title: "3 bedroom apartment",
    price: "₦ 285,000,000",
    image: "/duplex.svg",
  },
  {
    id: 3,
    location: "LUGBE, ABUJA DISTRICT 1",
    title: "5 bedroom Duplex Ter.",
    price: "₦ 285,000,000",
    image: "/duplex.svg",
  },
  {
    id: 4,
    location: "LUGBE, ABUJA DISTRICT 1",
    title: "2 bedroom Apartment",
    price: "₦ 800,000,000/YR",
    image: "/duplex.svg",
  },
  {
    id: 5,
    location: "ASOKORO VILLAS",
    title: "Executive Mansion",
    price: "₦ 480,000,000",
    image: "/duplex.svg",
  },
];

export default function Buy() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((index + 1) % slides.length);
  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#FFFCEC] flex flex-col items-center justify-center px-4">
      <div className="flex space-x-6 mb-4">
        <span className="text-black font-bold border-b-2 border-black cursor-pointer">
          Buy
        </span>
        <span className="text-gray-400">Lease</span>
        <span className="text-gray-400">Shortlets</span>
      </div>
      <div className="relative w-full max-w-[1194px] mt-4 h-[500px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[index].image}
              alt="property"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
            <div className="absolute top-3 right-3 bg-yellow-400 text-white px-4 py-2 font-bold">
              RENT
            </div>
            <div className="absolute bottom-10 lg:left-40 left-7 bg-blue-600 text-white p-6 rounded-xl md:h-[256px]  md:w-[695px] w-[290px]">
              <p className="text-[16px] text-gray-200">
                {slides[index].location}
              </p>
              <h2 className="md:text-[55px] text-[20px] font-semibold">
                {slides[index].title}
              </h2>
              <p className="md:text-[48px] text-[18px] font-bold text-black ">
                {slides[index].price}
              </p>
              <div className="flex flex-row items-center gap-[15px] ">
                <div className="md:w-[105px] w-[40px] h-[4px] bg-white"></div>
                <Link
                  href="#"
                  className="lg:text-[24px] text-[14px] font-light text-sm text-white"
                >
                  View Property
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white px-3 py-2"
        >
          <BsArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white px-3 py-2"
        >
          <BsArrowRight />
        </button>
      </div>

      <div className="flex items-center gap-5 py flex-col mt-8 w-full relative">
        <div className="w-full h-[20px] bg-[#B6B6B621] absolute md:left-[10%] left-[5%] mb-4">
          <div className="w-[10%] h-full bg-yellow-300"></div>
        </div>
        <div className="flex items-center gap-[20px] mt-8 w-full max-w-[75rem] group cursor-pointer transition-all duration-300 ease-in-out">
          <div className="md:w-[100px] h-[4px] bg-blue-600 group-hover:bg-black transition-all duration-300" />
          <span className="text-blue-600 font-bold md:text-[24px] group-hover:text-black transition-all duration-300">
            Explore
          </span>
        </div>
      </div>
    </div>
  );
}
