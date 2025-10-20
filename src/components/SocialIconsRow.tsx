"use client";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsSpotify } from "react-icons/bs";
import { FaDeezer } from "react-icons/fa";

const SocialIconsRow1 = () => {
  const tailwindColors: Record<string, string> = {
    "blue-300": "#93C5FD",
    "pink-400": "#F472B6",
    "green-600": "#16A34A",
    "[#faeda5]": "#faeda5",
    "red-800": "#991B1B",
    "blue-700": "#1D4ED8",
    black: "#626663",
  };

  const icons = [
    {
      id: 1,
      color: "blue-300",
      link: "https://x.com/BayoAdegbite_",
      label: "Twitter",
      icon: <Twitter />,
    },
    {
      id: 2,
      color: "pink-400",
      link: "https://www.instagram.com/bayo_adegbite/",
      label: "Instagram",
      icon: <Instagram />,
    },
    {
      id: 3,
      color: "green-600",
      link: "https://open.spotify.com/artist/2CS52uC1sYdYmvtPSaJmFJ?si=No_vHlooS2-JwLJxUQVIKA",
      label: "Spotify",
      icon: <BsSpotify />,
    },
    {
      id: 4,
      color: "[#1e1f1c]",
      link: "https://www.deezer.com/en/artist/11646073",
      label: "Deezer",
      icon: <FaDeezer />,
      bg: "gray-400"
      // src :"logo-sign-isolated-social-media.png"
    },
    {
      id: 5,
      color: "red-800",
      link: "https://www.youtube.com/@bayo_adegbite_Tv/featured",
      label: "Youtube",
      icon: <Youtube />,
    },
    {
      id: 6,
      color: "blue-700",
      link: "https://web.facebook.com/adegbite.bayo",
      label: "Facebook",
      icon: <Facebook />,
    },
    {
      id: 7,
      color: "black",
      link: "https://www.boomplay.com/share/artist/242540",
      label: "Boomplay",
      src: "/images/social/Boomplay_Music_Logo.png",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 md:flex justify-evenly items-center bg-black space-x-0 w-full md:h-40">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="relative flex flex-col items-center p-4 rounded-md w-20 h-32 justify-center"
          onMouseEnter={() => setHoveredId(icon.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div
            className="flex items-center justify-center w-full h-full transition-transform duration-300 hover:-translate-y-2"
            style={{ color: tailwindColors[icon.color] }}
          >
            {icon.icon ? (
              <div className="w-full h-full flex justify-center items-center">
                <Link href={icon.link} target="_blank" className="">{icon.icon}</Link>
              </div>
            ) : (
              <Link href={icon.link} target="_blank"><Image
                src={icon.src || ""}
                alt={icon.label}
                width={100}
                height={100}
                className="object-contain w-full h-full"
              /></Link>
            )}
          </div>

          {hoveredId === icon.id && (
            <p className="absolute bottom-2 text-gray-100 text-sm">
              {icon.label}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SocialIconsRow1;
