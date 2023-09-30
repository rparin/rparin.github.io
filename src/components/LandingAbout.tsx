import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { AboutGen, AboutSent, Socials } from "@/constants/About";
import { Icons } from "@/constants/Images";

export default function LandingAbout() {
  return (
    <>
      <a
        href="#home"
        className="select-none flex gap-1 text-white md:text-black dark:text-white text-center text-lg md:text-xl absolute md:fixed top-2 left-5 md:left-10 z-50 px-2 hover:text-sky-400 active:text-accent dark:active:text-sky-400">
        <span className="text-base">&lt; </span>
        {AboutGen.Initials}
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
        <p className="text-lg md:text-xl font-normal dark:font-light">
          {AboutGen.sent}
          <span className="font-normal dark:font-light"> {AboutSent[3]}</span>
        </p>

        <div className="flex flex-row justify-center gap-3">
          <a
            href={"mailto:" + AboutGen.email}
            className="text-lg md:text-xl font-normal dark:font-light text-sky-500">
            {AboutGen.email}
          </a>
          <a href={Socials.github} target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8 md:h-10 md:w-10 object-cover dark:invert"
              src={Icons.github.img}
              alt={Icons.github.alt}
            />
          </a>
          <a href={Socials.linkedIn} target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8 md:h-10 md:w-10 object-cover"
              src={Icons.linkedin.img}
              alt={Icons.linkedin.alt}
            />
          </a>
        </div>
      </div>
    </>
  );
}
