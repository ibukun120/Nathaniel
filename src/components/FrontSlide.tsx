"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
import React from "react";
import Image from "next/image";

const slides = [
  {
    type: "video",
    src: "/videos/Ruger-Ft-Bnxn-POE-Video-(TrendyBeatz.com).mp4",
    title: "WELCOME",
    subtitle: "Get the latest update about my music and ministry",
  },
  {
    type: "image",
    src: "/images/front-img.png",
    title: "MADE TO WORSHIP",
    subtitle: "Join the sound of a generation hungry for God",
  },
];

const FrontSlide = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 8 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearTimeout(timeoutRef.current as NodeJS.Timeout);
  }, [current]);

  const handleNext = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen overflow-hidden text-white px-32">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full"
              >
                {slide.type === "video" ? (
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={slide.src}
                    alt="background"
                    layout="fill"
                    className="object-cover w-full h-full"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                  <motion.h1
                    key={slide.title}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold tracking-wide"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mt-4 text-lg md:text-2xl"
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Left / Right Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
};

export default FrontSlide;
