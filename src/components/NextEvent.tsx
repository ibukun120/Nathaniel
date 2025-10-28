import Image from "next/image";
import React from "react";

const NextEvent = () => {
  return (
    <div className="relative inline-block h-72 mt-2 md:mt-32 mb-0 w-full text-white">
      <Image 
      // halleluya-chalenge.jpg
        src="/images/8H8A0002.jpg"
        alt="next-event"
        fill
        className="object-cover"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white p-2 w-full h-full flex justify-center items-center text-center text-2xl flex-col gap-5">
        <h1 className="text-4xl font-bold uppercase">next event</h1>
        <p className="text-sm">October Hallelujah Challenge</p>
      </div>
    </div>
  );
};

export default NextEvent;
