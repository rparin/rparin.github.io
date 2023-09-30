import Image from "next/image";
import { HomeImages, Icons } from "@/constants/Images";
import LandingAbout from "@/components/LandingAbout";

export default function Landing() {
  return (
    <section id="home" className="relative">
      <LandingAbout />
      <div className="h-[51vh] w-[100%] bg-gradient-to-t from-background absolute z-40"></div>
      <Image
        className="h-[50vh] w-[60%] object-cover absolute z-30 right-0 opacity-80"
        src={HomeImages.code.img}
        alt={HomeImages.code.alt}
      />
      <Image
        className="dark:hidden h-[50vh] w-[100%] object-cover saturate-150"
        src={HomeImages.bgP.img}
        alt={HomeImages.bgP.alt}
      />
      <Image
        className="hidden dark:block h-[50vh] w-[100%] object-cover saturate-150"
        src={HomeImages.bgR.img}
        alt={HomeImages.bgR.alt}
      />
    </section>
  );
}
