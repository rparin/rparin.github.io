import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";
import { AboutGen, AboutSent, Socials } from "@/constants/About";
import { Icons } from "@/constants/Images";

export default function LandingAbout() {
  return (
    <>
      <a
        href="#home"
        className="select-none flex gap-1 text-white md:text-black dark:text-white text-center absolute md:fixed top-2.5 left-5 md:left-10 z-60 px-2 hover:text-accent active:text-active dark:hover:text-accent dark:active:text-active">
        &lt; {AboutGen.Initials} /&gt;
      </a>

      <ThemeToggle className="absolute md:fixed top-1 right-5 md:right-10 z-60 border-0 h-9 rounded-md px-3 md:px-8 bg-background hover:bg-background active:bg-active dark:bg-background dark:hover:bg-background dark:active:bg-active" />

      <div className="absolute bottom-2 z-50 text-center w-full flex flex-col gap-1 md:gap-1.5">
        <h1 className="text-2xl md:text-3xl leading-7 md:leading-10 font-semibold">
          {AboutGen.First} {AboutGen.Last}
        </h1>
        <h2 className="text-base font-normal dark:font-light">
          {AboutGen.titles}
        </h2>
        <p className="text-base font-normal dark:font-light">
          {AboutGen.sent}
          <span className="font-normal dark:font-light"> {AboutSent[3]}</span>
        </p>

        <div className="flex flex-row justify-center gap-2">
          <a
            href={"mailto:" + AboutGen.email}
            className="text-base font-normal dark:font-light text-url">
            {AboutGen.email}
          </a>
          <a href={Socials.github} target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8 object-cover dark:invert"
              src={Icons.github.img}
              alt={Icons.github.alt}
            />
          </a>
          <a href={Socials.linkedIn} target="_blank" rel="noopener noreferrer">
            <Image
              className="h-8 w-8 object-cover"
              src={Icons.linkedin.img}
              alt={Icons.linkedin.alt}
            />
          </a>
        </div>
      </div>
    </>
  );
}
