// import Footer from "@/components/Footer";
import FrontSlide from "@/components/FrontSlide";
import LatestAlbum from "@/components/LatestAlbum";
import NextEvent from "@/components/NextEvent";
import SlidePic from "@/components/SlidePic";
import SocialIconsRow1 from "@/components/SocialIconsRow";
import Vid from "@/components/Vid";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16 text-white bg-white">
      <FrontSlide/>
      <LatestAlbum/>
      <NextEvent/>
      <Vid/>
      <SlidePic/>
      <SocialIconsRow1/>
    </div>
  );
}
