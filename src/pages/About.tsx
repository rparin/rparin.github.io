import cppLogo from "../app/assets/logos/Cpp.svg";
import pyLogo from "../app/assets/logos/Python.svg";
import javaLogo from "../app/assets/logos/Java.svg";
import htmlLogo from "../app/assets/logos/HTML.svg";
import cssLogo from "../app/assets/logos/CSS.svg";
import jsLogo from "../app/assets/logos/JS.svg";
import tsLogo from "../app/assets/logos/TS.svg";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="before:content-[''] before:h-10 before:block 2xl:before:h-32 flex min-h-screen flex-col">
      <h2 className="text-center">About Me</h2>
      <p className="text-left mx-10 md:mx-44 2xl:mx-96 2xl:px-44 mb-5 2xl:mb-24">
        I&apos;m currently a student at University of California, Irvine
        majoring in computer science.
        <br />
        <br />
        I found my passion of coding through automation. At a young age I
        learned that various tedious things can be done in seconds, things like
        renaming files and converting files. From there I learned the potential
        of computer science and decided to pursue the field to see what else it
        holds.
        <br />
        <br />
        When I am not creating a script or program to make my life easier, I am
        usually on Youtube watching videos about the latest and coolest tech.
        When there are no videos to watch I usually play Overwatch, or learn
        something new. Some things I learned aside from coding is Photoshop,
        Illustrator, After Effects, Aegisub and many other creator tools.
      </p>
      <h3 className="text-center">Skills</h3>
      <div className="flex flex-wrap justify-center items-center gap-7 2xl:gap-0.5 mx-3">
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl "
          src={cppLogo}
          alt="C++ logo"
        />
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl "
          src={pyLogo}
          alt="Python logo"
        />
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl "
          src={javaLogo}
          alt="Java logo"
        />
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl "
          src={htmlLogo}
          alt="HTML logo"
        />
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl "
          src={cssLogo}
          alt="CSS logo"
        />
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl "
          src={jsLogo}
          alt="Javascript logo"
        />
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl "
          src={tsLogo}
          alt="Typescript logo"
        />
      </div>
    </section>
  );
}
