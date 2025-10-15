"use client";

// import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SocialIconsRow2 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const icons = [
    { id: 1, src: "/images/youtube.png", symbol: "Y", alt: "YouTube" },
    { id: 2, src: "/images/facebook.png", symbol: "F", alt: "Facebook" },
    { id: 3, src: "/images/boomplay.png", symbol: "B", alt: "Boomplay" },
    { id: 4, src: "/images/playstore.png", symbol: "P", alt: "Playstore" },
    { id: 5, src: "/images/soundcloud.png", symbol: "S", alt: "SoundCloud" },
    { id: 6, src: "/images/applemusic.png", symbol: "A", alt: "Apple Music" },
    { id: 7, src: "/images/youtube.png", symbol: "Y", alt: "YouTube" },
    { id: 8, src: "/images/facebook.png", symbol: "F", alt: "Facebook" },
    { id: 9, src: "/images/boomplay.png", symbol: "B", alt: "Boomplay" },
    { id: 10, src: "/images/playstore.png", symbol: "P", alt: "Playstore" },
    { id: 11, src: "/images/soundcloud.png", symbol: "S", alt: "SoundCloud" },
    { id: 12, src: "/images/applemusic.png", symbol: "A", alt: "Apple Music" },
  ];

  return (
    <div className="relative flex items-center bg-transparent py-2 sm:py-3 px-4 sm:px-10 w-full sm:hidden md:block">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 sm:left-2 bg-white/60 backdrop-blur-md p-1.5 sm:p-2 rounded-full shadow-sm hover:bg-gray-200 z-10"
      >
        <ChevronLeft className="text-gray-800 w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex space-x-2 sm:space-x-3 overflow-x-auto scrollbar-hide scroll-smooth px-6 sm:px-10 w-full"
      >
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="flex items-center gap-1 sm:gap-2 bg-transparent hover:bg-gray-100 rounded-md px-2 sm:px-3 py-1 flex-shrink-0 transition-all duration-200"
          >
            {/* Symbol */}
            <div className="py-1 px-2 rounded-full bg-gray-700 text-xs sm:text-sm text-white flex justify-center items-center">
              {icon.symbol}
            </div>

            {/* Label */}
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-800 whitespace-nowrap">
              {icon.alt}
            </p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 sm:right-2 bg-white/60 backdrop-blur-md p-1.5 sm:p-2 rounded-full shadow-sm hover:bg-gray-200 z-10"
      >
        <ChevronRight className="text-gray-800 w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default SocialIconsRow2;
