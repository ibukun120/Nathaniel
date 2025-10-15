"use client";
import Image from "next/image";
import { useState } from "react";

const SocialIconsRow1 = () => {
  const icons = [
    {
      id: 1,
      color: "black",
      src: "/images/social/img1.png",
      alt: "Twitter",
      label: "Twitter",
    },
    {
      id: 2,
      color: "[1e1f1c]",
      src: "/images/social/img2.png",
      alt: "Instagram",
      label: "Instagram",
    },
    {
      id: 3,
      color: "black",
      src: "/images/social/img3.png",
      alt: "Spotify",
      label: "Spotify",
    },
    {
      id: 4,
      color: "[1e1f1c]",
      src: "/images/social/img4.png",
      alt: "Deezer",
      label: "Deezer",
    },
    {
      id: 5,
      color: "black",
      src: "/images/social/img5.png",
      alt: "Youtube",
      label: "Youtube",
    },
    {
      id: 6,
      color: "[1e1f1c]",
      src: "/images/social/img6.png",
      alt: "Facebook",
      label: "Facebook",
    },
    {
      id: 7,
      color: "black",
      src: "/images/social/img7.png",
      alt: "Boomplay",
      label: "Boomplay",
    },
    {
      id: 8,
      color: "gray-300",
      src: "/images/social/img8.png",
      alt: "PlayStore",
      label: "PlayStore",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="hidden md:flex justify-evenly items-center bg-black space-x-0 w-full h-40">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`relative flex flex-col items-center p-4 rounded-md w-20 h-32 bg-${icon.color}`}
          onMouseEnter={() => setHoveredId(icon.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={100}
            height={100}
            className="hover:-translate-y-1/5 transition-transform duration-300 w-full h-full"
          />
          {hoveredId === icon.id && (
            <p className="absolute bottom-2 text-gray-100">{icon.label}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialIconsRow1;
