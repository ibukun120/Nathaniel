"use client";

import AlbumLinks from "@/components/AlbumLinks";
import Link from "next/link";
// import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-16 text-black ">
      <div className="absolute inset-0 bg-black/20 min-h-screen top-16"></div>
      {/* nath-album.jpg ---- formal */}
      <div className="bg-[url('/images/8H8A0163.jpg')] bg-center bg-cover bg-no-repeat w-full h-screen px-32 flex items-center">
        {/* <Image src="/images/nath-album.jpg" width={100} height={100} alt='nathaa'/> */}
        <h1 className="text-4xl font-semibold text-white opacity-100">
          Albums
        </h1>
      </div>

      <div className="bg-white py-8">
        {/* <AlbumLinks/> */}
        <div className="flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k5345w3TzuI?si=RmOHVjOsfSj1EO4W"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* <Link href='https://www.youtube.com/watch?v=Hxnnr-jA9IY&list=OLAK5uy_kw0MOrISKjL2hgEu8mMsPmsty9U0AxiTw' className="bg-gray-300 text-gray-600 py-2 px-6"> See More</Link> */}
      </div>
    </div>
  );
};

export default page;
