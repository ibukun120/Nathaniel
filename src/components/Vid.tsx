import React from "react";

const Vid = () => {
  return (
    <div className="mb-0 bg-gray-900 flex flex-col gap-4 justify-center items-center py-24">
      <h1 className="uppercase text-4xl font-bold">latest video</h1>
      {/* <div className="">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/k3AwYXDh1BE?si=S3tREHudwH0yQ-eH"
          title="YouTube video player"
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}

      <div className="hidden md:block">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/AYmP15UZNPc?si=p1PVzuB-neeDbghI"
          title="YouTube video player"
          className="border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="block md:hidden">
        <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/AYmP15UZNPc?si=p1PVzuB-neeDbghI"
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

export default Vid;
