import React from "react";
import Image from "next/image";
import Link from "next/link";

// Example songs data
const songs = [
  {
    id: 1,
    title: "Sample Song 1",
    cover: "/images/song1.jpg",
    youtube: "https://youtube.com",
    spotify: "https://spotify.com",
    apple: "https://music.apple.com",
  },
  {
    id: 2,
    title: "Sample Song 2",
    cover: "/images/song2.jpg",
    youtube: "https://youtube.com",
    spotify: "https://spotify.com",
    apple: "https://music.apple.com",
  },
  {
    id: 3,
    title: "Sample Song 3",
    cover: "/images/song3.jpg",
    youtube: "https://youtube.com",
    spotify: "https://spotify.com",
    apple: "https://music.apple.com",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-gray-50 py-12 px-4 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold mb-10 text-center">Artist Songs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {songs.map((song) => (
          <div
            key={song.id}
            className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center"
          >
            <Image
              src={song.cover}
              alt={song.title}
              width={250}
              height={250}
              className="rounded-xl object-cover"
            />
            <h2 className="mt-4 text-xl font-semibold text-center">{song.title}</h2>

            <div className="flex gap-4 mt-4">
              <Link
                href={song.youtube}
                target="_blank"
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
              >
                YouTube
              </Link>

              <Link
                href={song.spotify}
                target="_blank"
                className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
              >
                Spotify
              </Link>

              <Link
                href={song.apple}
                target="_blank"
                className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Apple
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
