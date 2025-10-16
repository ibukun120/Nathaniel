"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const comments = [
  {
    name: "John Doe",
    text: "This platform has really helped me improve my workflow. Highly recommended!",
  },
  {
    name: "Jane Smith",
    text: "Great experience! The interface is intuitive and easy to use.",
  },
  {
    name: "Michael Brown",
    text: "Customer support was excellent. Quick and professional response every time.",
  },
  {
    name: "Sarah Johnson",
    text: "I’ve seen real improvements in productivity since using this app!",
  },
];

export default function CommentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mt-32 h-screen w-full max-w-2xl mx-auto overflow-hidden rounded-2xl bg-white shadow-lg p-8 flex flex-col justify-center items-center">
      {/* Comment Slide */}
      <div className="text-center transition-all duration-700 ease-in-out">
        <p className="text-lg italic text-gray-700 mb-4">
          "{comments[currentIndex].text}"
        </p>
        <h3 className="font-semibold text-gray-900">
          — {comments[currentIndex].name}
        </h3>
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {comments.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
