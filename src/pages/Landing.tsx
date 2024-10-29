import Image from "next/image";
import { HomeImages } from "@/constants/Images";
import LandingAbout from "@/components/LandingAbout";
import { NavHome } from "@/constants/NavLinks";

export default function Landing() {
  return (
    <header id={NavHome.id} className="relative">
      <LandingAbout />
      <div className="h-[41vh] md:h-[51vh] w-[100%] absolute z-40 banner-grad"></div>
      <Image
        className="h-[40vh] md:h-[50vh] w-[60%] object-cover absolute z-30 right-0 opacity-80"
        src={HomeImages.code.img}
        alt={HomeImages.code.alt}
        priority
      />
      <Image
        className="dark:hidden h-[40vh] md:h-[50vh] w-[100%] object-cover saturate-150"
        src={HomeImages.bgP.img}
        alt={HomeImages.bgP.alt}
        priority
      />
      <Image
        className="hidden dark:block h-[40vh] md:h-[50vh] w-[100%] object-cover saturate-150"
        src={HomeImages.bgR.img}
        alt={HomeImages.bgR.alt}
        priority
      />
    </header>
  );
}
