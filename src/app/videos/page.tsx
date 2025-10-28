import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pt-16 bg-white">
      {/* 8H8A0207.jpg
      vid.jpeg 
      8H8A0205.jpg*/}
      <div className="bg-[url('/images/8H8A0205.jpg')] bg-cover bg-center h-screen w-full opacity-90 flex flex-col md:flex-row md:justify-between md:items-center pt-32 md:pt-0 gap-8 md:gap-0 px-4 md:px-32">
        <h1 className="text-5xl font-semibold text-gray-300">VIDEOS</h1>

        <div className="flex text-gray-100 opacity-100">
          <Link href="#">Bayo Adegbite</Link> / <Link href="#">Elements</Link> /{" "}
          <Link href="#">VIDEO</Link>
        </div>
      </div>
      {/* vid.jpeg */}

      <div className=" py-20 w-full flex justify-center items-center ">
        <iframe
          width="470"
          height="412"
          src="https://www.youtube.com/embed/wdSMGH_6nfE?si=S40dFxwv09SIu4Pk"
          title="YouTube video player"
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* large view */}
      {/* <div className="hidden md:hidden lg:block mb-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 px-20">
          <div className="w-full px-4">
            <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/lw0-n4EIVxQ?si=S9KR6IkWYjRh2BOe"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>

          <div className="w-full px-4">
            <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/PAuOF5Dy9-E?si=n6aHq-c9SRDHusP3"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>

          <div className="w-full px-4">
            <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/rriNWv2UZJ0?si=utAEQcJZKclCGznd"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          </div>
          
          <div className="w-full px-4">
            <iframe
            width="500"
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

        <div className="flex items-center justify-center py-6">
          <Link
            href="#"
            className="px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-400"
          >
            Show More
          </Link>
        </div>
      </div> */}

      {/* medium view */}
      <div className="hidden md:block mb-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 px-20">
          <div className="w-full px-4">
            {/*fixed*/}
            <iframe
              width="410"
              height="300"
              src="https://www.youtube.com/embed/AylREEIagf8?si=FYeQ3mvyVsSxb95v"
              title="YouTube video player"
              className="border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full px-4">
            {/*fixed*/}
            <iframe
              width="410"
              height="300"
              src="https://www.youtube.com/embed/k3AwYXDh1BE?si=u-eLqykuqXlHKMqy"
              title="YouTube video player"
              className="border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full px-4">
            {/*fixed*/}
            <iframe
              width="410"
              height="300"
              src="https://www.youtube.com/embed/Hxnnr-jA9IY?si=97gLAo2dz0-O6-dp"
              title="YouTube video player"
              className="border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full px-4">
            {/*fixed*/}
            <iframe
              width="410"
              height="300"
              src="https://www.youtube.com/embed/d3yBhTT0CuY?si=mmfBOyD8vtWfRCSW"
              title="YouTube video player"
              className="border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        
      </div>
      {/* medium view */}

      {/* mobile view */}
      <div className="flex flex-col gap-12 md:hidden bg-white mb-12 w-full justify-center items-center">
        <div className="w-full px-4">
          {" "}
          {/*fixed*/}
          <iframe
            width="350"
            height="215"
            src="https://www.youtube.com/embed/AylREEIagf8?si=FYeQ3mvyVsSxb95v"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full px-4">
          {/*fixed*/}
          <iframe
            width="350"
            height="215"
            src="https://www.youtube.com/embed/k3AwYXDh1BE?si=u-eLqykuqXlHKMqy"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full px-4">
          {/*fixed*/}
          <iframe
            width="350"
            height="215"
            src="https://www.youtube.com/embed/Hxnnr-jA9IY?si=97gLAo2dz0-O6-dp"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full px-4">
          {/*fixed*/}
          <iframe
            width="350"
            height="215"
            src="https://www.youtube.com/embed/d3yBhTT0CuY?si=mmfBOyD8vtWfRCSW"
            title="YouTube video player"
            className="border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>


      <div className="flex items-center justify-center py-6">
          <Link
            href="https://www.youtube.com/@bayo_adegbite_Tv/videos"
            target="_blank"
            className="px-8 py-4 rounded-lg bg-orange-500 hover:bg-orange-400"
          >
            Show More
          </Link>
        </div>
    </div>
  );
};

export default page;
