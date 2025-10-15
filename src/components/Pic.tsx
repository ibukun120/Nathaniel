"use client";
import { Divide } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface DataItem {
  id: number;
  imageUrl: string;
  text: string;
}

interface Props {
  list: DataItem[];
}

function Pic() {
  const list = [
    {
      id: 1,
      imageUrl: "/images/halleluyah-again.png",
      text: "halleluyah again",
      heading: "nathaniel bassey",
    },
    {
      id: 2,
      imageUrl: "/images/the-king.png",
      text: "the king is coming",
      heading: "nathaniel bassey",
    },
    {
      id: 3,
      imageUrl: "/images/jesus.png",
      text: "Jesus the resurrection & the life",
      heading: "nathaniel bassey",
    },
    {
      id: 4,
      imageUrl: "/images/revival-flame.png",
      text: "revival flames",
      heading: "nathaniel bassey",
    },
    {
      id: 5,
      imageUrl: "/images/at-the-door.png",
      text: "someone at the door",
      heading: "nathaniel bassey",
    },
    {
      id: 6,
      imageUrl: "/images/imela.png",
      text: "the son of God & imela",
      heading: "nathaniel bassey",
    },
    {
      id: 7,
      imageUrl: "/images/god-of-love.png",
      text: "God of love",
      heading: "nathaniel bassey",
    },
    {
      id: 8,
      imageUrl: "/images/name-of-God.png",
      text: "the name of God",
      heading: "nathaniel bassey",
    },
    {
      id: 9,
      imageUrl: "/images/live.png",
      text: "halleluyah live",
      heading: "nathaniel bassey",
    },
  ];
  const [showText, setShowText] = useState<number | null>(null);
  return (
    <div className="hidden md:grid grid-cols-3 ">
      {list.map((data) => (
        <div
          key={data.id}
          className="relative inline-block gap-0.5"
          onMouseOver={() => setShowText(data.id)}
          onMouseOut={() => setShowText(null)}
        >
          <Image
            src={data.imageUrl}
            alt={data.imageUrl}
            width={200}
            height={200}
            className="obeject-cover"
          />
          {showText === data.id && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white p-2 uppercase w-full h-full flex justify-center items-center text-center font-semibold text-2xl flex-col">
              <p className="text-sm">{data.heading}</p>
              <p>{data.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Pic;
