import Image from "next/image";
import { HomeImages } from "@/constants/Images";
import LandingAbout from "@/components/LandingAbout";
import { NavHome } from "@/constants/NavLinks";

export default function Landing() {
  return (
    <header id={NavHome.id} className="relative">
      <LandingAbout />
      <div className="banner-grad absolute z-40 h-[41vh] w-[100%] md:h-[51vh]"></div>
      <Image
        className="absolute right-0 z-30 h-[40vh] w-[60%] object-cover opacity-80 md:h-[50vh]"
        src={HomeImages.code.img}
        alt={HomeImages.code.alt}
        priority
      />
      <Image
        className="h-[40vh] w-[100%] object-cover saturate-150 dark:hidden md:h-[50vh]"
        src={HomeImages.bgP.img}
        alt={HomeImages.bgP.alt}
        priority
      />
      <Image
        className="hidden h-[40vh] w-[100%] object-cover saturate-150 dark:block md:h-[50vh]"
        src={HomeImages.bgR.img}
        alt={HomeImages.bgR.alt}
        priority
      />
    </header>
  );
}
