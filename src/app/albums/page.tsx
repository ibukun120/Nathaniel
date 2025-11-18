"use client";

import AlbumLinks from "@/components/AlbumLinks";
// import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-16 text-black ">
      {/* nath-album.jpg ---- formal */}
      <div className="bg-[url('/images/8H8A0163.jpg')] bg-center bg-cover bg-no-repeat w-full h-screen px-32 flex items-center">
        {/* <Image src="/images/nath-album.jpg" width={100} height={100} alt='nathaa'/> */}
        <h1 className="text-4xl font-semibold text-white">Albums</h1>
      </div>

      <div className="bg-white">
        {/* <AlbumLinks/> */}
      </div>
    </div>
  );
};

export default page;
