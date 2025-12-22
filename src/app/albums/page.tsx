"use client";

// import AlbumLinks from "@/components/AlbumLinks";
import YouTubeGrid from "@/components/Maping";
// import Link from "next/link";
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

      <div className="bg-white py-4 px-2">
        {/* <AlbumLinks/> */}
        <div className="flex justify-center items-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k5345w3TzuI?si=RmOHVjOsfSj1EO4W"
            title="YouTube video player"
            className="border-0 w-full md:w-2/3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-4">
          <div>
            <iframe
              data-testid="embed-iframe"
              className="rounded-lg"
              src="https://open.spotify.com/embed/track/1KknqXooD1WQDCij5tyw0u"
              width="100%"
              height="352"
              style={{ border: 0 }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <YouTubeGrid />
        </div>

        
      </div>
    </div>
  );
};

export default page;
