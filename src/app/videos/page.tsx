import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="bg-[url('/images/vid.jpeg')] bg-cover bg-center h-screen w-full opacity-90 md:flex justify-between items-center px-4 md:px-32">
        <h1 className="text-5xl font-semibold text-black">VIDEOS</h1>

        <div className="flex text-black opacity-100">
          <Link href="#">Nathanielbassey</Link> / <Link href="#">Elements</Link>{" "}
          / <Link href="#">VIDEO</Link>
        </div>
      </div>
      {/* vid.jpeg */}

      <div className=" py-20 w-full flex justify-center items-center ">
        <iframe
          width="670"
          height="412"
          src="https://www.youtube.com/embed/mC4GkU3DHaE?si=Vky0KAbNgV2CP6jf"
          title="YouTube video player"
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="hidden md:block mb-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 px-20">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lw0-n4EIVxQ?si=S9KR6IkWYjRh2BOe"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PAuOF5Dy9-E?si=n6aHq-c9SRDHusP3"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rriNWv2UZJ0?si=utAEQcJZKclCGznd"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rPSXJwNtCto?si=LW9H7UpiOtcy8dFb"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex items-center justify-center py-6">
          <Link
            href="#"
            className="px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-400"
          >
            Show More
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:hidden bg-white mb-12 w-full justify-center items-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lw0-n4EIVxQ?si=S9KR6IkWYjRh2BOe"
          title="YouTube video player"
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PAuOF5Dy9-E?si=n6aHq-c9SRDHusP3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rriNWv2UZJ0?si=utAEQcJZKclCGznd"
          title="YouTube video player"
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rPSXJwNtCto?si=LW9H7UpiOtcy8dFb"
          title="YouTube video player"
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default page;
