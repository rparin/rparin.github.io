import Image from "next/image";
import { HomeImages } from "@/constants/Images";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AboutGen, AboutSent } from "@/constants/About";

export default function Landing() {
  return (
    <section id="home" className="relative">
      <a
        href="#home"
        className="select-none flex gap-1 text-white md:text-black dark:text-white text-center text-lg md:text-xl absolute md:fixed top-2 left-5 md:left-10 z-50 px-2 hover:text-sky-400 active:text-accent dark:active:text-sky-400">
        <span className="text-base">&lt; </span>
        RP
        <span className="text-base"> /&gt;</span>
      </a>
      <ThemeToggle className="absolute md:fixed top-1 right-5 md:right-10 z-50 border-0 h-9 rounded-md px-3 md:h-11 md:px-8 bg-background hover:bg-background active:bg-accent dark:bg-background dark:hover:bg-background dark:active:bg-accent" />
      <div className="absolute bottom-4 z-50 text-center w-full flex flex-col gap-1 md:gap-3">
        <h1 className="text-3xl md:text-4xl leading-10 md:leading-[3rem] font-semibold">
          {AboutGen.First} {AboutGen.Last}
        </h1>
        <h2 className="text-lg md:text-xl font-normal dark:font-light">
          {AboutGen.titles}
        </h2>
        <h3 className="text-lg md:text-xl font-normal dark:font-light">
          {AboutGen.sent}
          <span className="font-normal dark:font-light"> {AboutSent[3]}</span>
        </h3>
        <a
          href="mailto:r.parin070@gmail.com"
          className="text-lg md:text-xl font-normal dark:font-light text-sky-500">
          {AboutGen.email}
        </a>
      </div>
      <div className="h-[51vh] w-[100%] bg-gradient-to-t from-background absolute z-40"></div>
      <Image
        className="h-[50vh] w-[60%] object-cover absolute z-30 right-0 opacity-80"
        src={HomeImages.code.img}
        alt={HomeImages.code.alt}
      />
      <Image
        className="dark:hidden h-[50vh] w-[100%] object-cover"
        src={HomeImages.bgP.img}
        alt={HomeImages.bgP.alt}
      />
      <Image
        className="hidden dark:block h-[50vh] w-[100%] object-cover"
        src={HomeImages.bgR.img}
        alt={HomeImages.bgR.alt}
      />
    </section>
  );
}
