import Image from "next/image";
import React from "react";
import Pic from "./Pic";
import SocialIconsRow2 from "./Social";

const LatestAlbum = () => {
  return (
    <div className="min-h-screen bg-white text-gray-950 py-32 ">
      <div className="text-center space-y-3 px-12">
        <h1 className="font-bold text-4xl uppercase">latest albums</h1>
        <p className="text-xl text-gray-400 font-light">
          Your favourite songs now at your finger tips
        </p>
      </div>

      {/* second dv */}
      <div className="w-full flex flex-col md:flex-row mt-16 px-4 md:px-12">
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-between space-y-6 md:space-y-0">
          <div>
            <Image
              src="/images/8H8A0026.jpg"
              alt="the-river"
              width={400}
              height={850}
            />
          </div>

          <div className="text-gray-400 pr-12">
            was taken in the Spirit to a church (which I believe was the throne
            room in my vision), and I heard this song being sung. It is a song
            from heaven. As you listen, you will experience the blessing of the
            throne of grace.
          </div>

          <div>
            {/* <SocialIconsRow2/> */}
          </div>
        </div>
        <div className="w-1/2 p-2">
          <Pic />
        </div>
      </div>

      {/* third div  */}
    </div>
  );
};

export default LatestAlbum;
