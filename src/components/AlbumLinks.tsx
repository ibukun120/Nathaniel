import React, { useState } from "react";

const items = [
  { id: 1, title: "The River", imageUrl: "/images/albums/img1.png", link: "#" },
  { id: 2, title: "Jesus Iye", imageUrl: "/images/albums/img2.png", link: "#" },
  { id: 3, title: "Hallelujah Live", imageUrl: "/images/albums/img3.png", link: "#" },
  { id: 4, title: "Name of Jesus", imageUrl: "/images/albums/img4.png", link: "#" },
  { id: 5, title: "God of Love", imageUrl: "/images/albums/img5.png", link: "#" },
  { id: 6, title: "Son of God Imela", imageUrl: "/images/albums/img6.png", link: "#" },
  { id: 7, title: "Son of God Imela", imageUrl: "/images/albums/img7.png", link: "#" },
  { id: 8, title: "Someone at the Door", imageUrl: "/images/albums/img8.png", link: "#" },
  { id: 9, title: "Rivival Flames", imageUrl: "/images/albums/img9.png", link: "#" },
  { id: 10, title: "Jesus: The Resurrection & the Life", imageUrl: "/images/albums/img10.png", link: "#" },
  { id: 11, title: "The King is Coming", imageUrl: "/images/albums/img11.png", link: "#" },
  { id: 12, title: "Hallelujah Again", imageUrl: "/images/albums/img12.png", link: "#" },
];

export default function AlbumLinks() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => setVisibleCount(items.length);

  return (
    <div className="px-6 md:px-36 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {items.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="text-center">
            {/* Image link */}
            <a href={item.link}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover hover:opacity-90 transition"
              />
            </a>

            {/* Text link */}
            <a
              href={item.link}
              className="block mt-2 text-lg font-semibold text-gray-800 hover:text-purple-600"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>

      {visibleCount < items.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMore}
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
