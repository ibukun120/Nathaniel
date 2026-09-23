import FrontSlide from "@/components/FrontSlide";
import LatestAlbum from "@/components/LatestAlbum";
import SlidePic from "@/components/SlidePic";
import SocialIconsRow1 from "@/components/SocialIconsRow";
import Vid from "@/components/Vid";

export default function Home() {
  return (
    <div className="flex flex-col bg-paper">
      <FrontSlide />
      <LatestAlbum />
      <Vid />
      <SlidePic />
      <SocialIconsRow1 />
    </div>
  );
}
