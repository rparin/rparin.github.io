import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { AboutGen, AboutSent, Socials } from "@/constants/About";
import { SocialIcons } from "@/constants/Icons";

export default function LandingAbout() {
  return (
    <>
      <Link
        aria-label="Website Home Page"
        replace={true}
        href="/"
        className="horizontal-mask absolute left-5 top-2.5 z-60 flex select-none gap-1 bg-background px-3 text-center text-white hover:text-accent active:text-active dark:text-white dark:hover:text-accent dark:active:text-active md:fixed md:left-10 md:text-black">
        &lt; {AboutGen.Initials} /&gt;
      </Link>

      <ThemeToggle className="absolute right-5 top-1 z-60 h-9 rounded-md border-0 bg-background px-3 hover:bg-background active:bg-active dark:bg-background dark:hover:bg-background dark:active:bg-active md:fixed md:right-10 md:px-8" />

      <section className="absolute bottom-2 z-50 flex w-full flex-col gap-1 text-center md:gap-1.5">
        <h1 className="text-2xl font-semibold leading-7 md:text-3xl md:leading-10">
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
            aria-label="Email Ralph"
            href={"mailto:" + AboutGen.email}
            className="text-base font-normal text-url dark:font-light">
            {AboutGen.email}
          </a>
          <a
            aria-label="Ralph's Github"
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
            aria-label="Ralph's LinkedIn"
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
      </section>
    </>
  );
}
