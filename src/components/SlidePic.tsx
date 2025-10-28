import React from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryData: GalleryImage[] = [
  { id: 1, src: "/images/slides/img1.jpg", alt: "ema" },
  { id: 2, src: "/images/slides/img2.jpg", alt: "st" },
  { id: 3, src: "/images/slides/img3.jpg", alt: "TNOG-118" },
  { id: 4, src: "/images/slides/img4.jpg", alt: "shegz" },
  { id: 5, src: "/images/slides/img5.jpg", alt: "felix" },
  { id: 6, src: "/images/slides/img6.jpg", alt: "PNW" },
  { id: 7, src: "/images/slides/img7.jpg", alt: "PNN" },
  { id: 8, src: "/images/slides/img8.jpg", alt: "nath" },
  { id: 9, src: "/images/slides/img9.jpg", alt: "ev1" },
  { id: 10, src: "/images/slides/img10.jpg", alt: "george" },
];

export default function SlidePic() {
  return (
    <section className="bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0">
          {galleryData.map((item) => (
            <div key={item.id} className="relative overflow-hidden group">
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-semibold transition-opacity duration-300 leading-3">
                {item.alt}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
