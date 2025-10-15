import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const FrontSlide = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-between h-screen bg-[url('/images/front-img.png')] bg-cover bg-center text-white px-6 sm:px-10 lg:px-20">
      {/* Left arrow (hidden on small screens) */}
      <div className="hidden sm:block cursor-pointer">
        <ChevronLeft size={40} className="hover:text-gray-300 transition" />
      </div>

      {/* Center text + content */}
      <div className="text-center sm:text-left max-w-lg sm:pl-10 lg:pl-20">
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-md">
          Welcome
        </h1>

        <p className="text-sm sm:text-base md:text-lg mt-3">
          Get the latest updates about my music and ministry
        </p>

        <div className="mt-5 flex justify-center sm:justify-start">
          <Image
            src="/images/apple-itunse-2.jpeg"
            width={150}
            height={40}
            alt="iTunes"
            className="rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Right arrow (hidden on small screens) */}
      <div className="hidden sm:block cursor-pointer">
        <ChevronRight size={40} className="hover:text-gray-300 transition" />
      </div>
    </section>
  );
};

export default FrontSlide;
