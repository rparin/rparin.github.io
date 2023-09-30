import Image from "next/image";
import { HomeImages } from "@/constants/Images";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Landing() {
  return (
    <section id="home" className="relative">
      <a
        href="#home"
        className="select-none flex gap-1 text-center text-lg md:text-xl fixed top-2 left-5 md:left-10 z-50 px-2 hover:text-sky-400 active:text-accent dark:active:text-sky-400">
        <span className="text-base">&lt; </span>
        RP
        <span className="text-base"> /&gt;</span>
      </a>
      <ThemeToggle className="fixed top-1 right-5 md:right-10 z-50 border-0 h-9 rounded-md px-3 md:h-11 md:px-8 bg-background hover:bg-background active:bg-accent dark:bg-background dark:hover:bg-background dark:active:bg-accent" />
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
