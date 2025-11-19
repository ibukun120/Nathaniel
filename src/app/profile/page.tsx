// import SocialIconsRow1 from "@/components/SocialIconsRow";
// import Image from "next/image";
import React from "react";

const page = () => {
  // 8H8A0057.jpg
  // 8H8A0163.jpg
  // profile.jpg
  // 8H8A0057.jpg
  return (
    <div className="pt-4 md:pt-20 flex flex-row justify-center items-center px-6 md:px-12 bg-[url('/images/profile.jpg')] bg-center bg-cover bg-no-repeat relative">
      {/* <Image
          src="/images/nath-profile.jpeg"
          alt="nath"
          width={100}
          height={100}
          className="absolute object-cover"
        /> */}
          <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>

      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-5 md:gap-16 text-sm px-2 md:px-8 py-40 text-white z-10">
        <h1 className="text-4xl font-bold text-white">PROFILE</h1>
        <p className="tracking-wider leading-6">
          Bayo Adegbite is a passionate gospel music minister,
          singer-songwriter, and recording artist from Oyo State, Nigeria. He
          currently serves as the Head of the Music Department at World
          Changers’ Assembly, a vibrant youth church under the Redeemed
          Christian Church of God (RCCG). Leading his band, Sound From Heaven,
          Bayo and his talented group of instrumentalists and singers rehearse
          and minister together, delivering powerful worship across Nigeria in
          response to invitations nationwide.
        </p>
        <p className="tracking-wider leading-6">
          Bayo believes music is a vital instrument of worship, enabling
          believers to praise and magnify Jesus through the power of the Holy
          Spirit while creating an atmosphere to receive from God. His ministry
          carries a unique and prophetic sound, igniting revival and fostering a
          deep longing for God’s presence.
        </p>

        <p className="tracking-wider leading-6">
          In 2015, Bayo released his debut single, “Aninilematannile”
          (Inexhaustible God), which became a beloved worship song in churches
          across Nigeria. Since then, he has released several tracks and is set
          to launch his upcoming single, “Mekoddishkem”, on November 13, 2025.
          Bayo is a firm advocate for holiness, viewing it as essential in for
          fulfilling one’s destiny, advancing God’s kingdom and making heaven.
          He embodies the concept of a complete music minister, emphasizing
          spirit, skill, and character in his work.
        </p>

        <p className="tracking-wider leading-6">
          He also inspires his followers by sharing Bible passages on social
          media, stirring faith and encouraging spiritual growth. Beyond music,
          Bayo is a dedicated family man and entrepreneur. He resides in Lagos,
          Nigeria, with his wife and daughter, where they jointly run a bag
          business based in Ajao Estate, Lagos.
        </p>
      </div>

      <div className="hidden md:inline-block md:w-1/3 lg:w-1/2 px-2 py-32"></div>
    </div>
  );
};

export default page;
