
"use client";

type Video = {
  id: string;
  title: string;
};

const videos: Video[] = [
  { id: "https://www.youtube.com/embed/k5345w3TzuI?si=9ccmDZuu68PHpv4f", title: "MEKODDISHKEM" },
  { id: "https://www.youtube.com/embed/yLBX-UHo1JM?si=X6vqH-wuHUyRRT-J", title: "Yeshua" },
  { id: "https://www.youtube.com/embed/jjmEtf00LkI?si=SOTFO6O_1wsqw3E6", title: "Akirisore (Live)" },
  { id: "https://www.youtube.com/embed/WwdeFAE4q_g?si=xs8lnjxmRPu09VA_", title: "Hallelujah Chant (Live)" },
  { id: "https://www.youtube.com/embed/jQOEfVhQhyI?si=eNgmu9AibKhcgmrL", title: "Aninilematannile (Live)" },
  { id: "https://www.youtube.com/embed/vjw7wCtgF18?si=YiZJhxd4eIa_dYQ4", title: "Kari Ogo Re (Live)" },
];

export default function YouTubeGrid() {
  return (
    <div className="px-4 md:px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="space-y-3">
            {/* Video */}
            <div className="relative w-full aspect-video rounded overflow-hidden shadow-md">
              <iframe
                src={video.id}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>

            {/* Title */}
            <p className="text-base font-medium text-gray-800 text-center">
              {video.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
