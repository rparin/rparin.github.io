import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AboutGen, AboutSent, Socials } from "@/constants/About";
import { SocialIcons } from "@/constants/Icons";

export default function LandingAbout() {
  return (
    <>
      <Link
        replace={true}
        href="#home"
        className="select-none flex gap-1 text-white md:text-black dark:text-white text-center absolute md:fixed top-2.5 left-5 md:left-10 z-60 px-2 hover:text-accent active:text-active dark:hover:text-accent dark:active:text-active">
        &lt; {AboutGen.Initials} /&gt;
      </Link>

      <ThemeToggle className="absolute md:fixed top-1 right-5 md:right-10 z-60 border-0 h-9 rounded-md px-3 md:px-8 bg-background hover:bg-background active:bg-active dark:bg-background dark:hover:bg-background dark:active:bg-active" />

      <header className="absolute bottom-2 z-50 text-center w-full flex flex-col gap-1 md:gap-1.5">
        <h1 className="text-2xl md:text-3xl leading-7 md:leading-10 font-semibold">
          {AboutGen.First} {AboutGen.Last}
        </h1>
        <p className="text-base font-normal dark:font-light">
          {AboutGen.titles}
        </p>
        <p className="text-base font-normal dark:font-light">
          {AboutGen.sent}
          <span className="font-normal dark:font-light"> {AboutSent[3]}</span>
        </p>

        <div className="flex flex-row justify-center gap-2">
          <a
            title={SocialIcons.gmail.name}
            href={"mailto:" + AboutGen.email}
            className="text-base font-normal dark:font-light text-url">
            {AboutGen.email}
          </a>
          <a
            title={SocialIcons.github.name}
            href={Socials.github}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="h-8 w-8 object-cover dark:invert"
              src={SocialIcons.github.img}
              alt={SocialIcons.github.name}
            />
          </a>
          <a
            title={SocialIcons.linkedin.name}
            href={Socials.linkedIn}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="h-8 w-8 object-cover"
              src={SocialIcons.linkedin.img}
              alt={SocialIcons.linkedin.name}
            />
          </a>
        </div>
      </header>
    </>
  );
}
