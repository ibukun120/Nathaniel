import React from "react";

const Vid = () => {
  return (
    <div className="hidden bg-gray-900 md:flex flex-col gap-4 justify-center items-center py-24">
      <h1 className="uppercase text-4xl font-bold">latest video</h1>
      <div className="">
        <iframe
          width="760"
          height="415"
          src="https://www.youtube.com/embed/mC4GkU3DHaE?si=z4UNDtWtLy_gbMn1"
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
