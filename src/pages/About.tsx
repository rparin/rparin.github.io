import { AboutMe } from "@/constants/About";
import { AboutImages } from "@/constants/Images";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="before:content-[''] before:h-20 before:block mx-5 lg:mx-16">
      <div className="flex flex-col gap-10">
        <h3 className="text-base md:text-xl text-center font-normal">
          <i>{AboutMe.Intro}</i>
        </h3>

        <div className="relative flex justify-center">
          <p className="absolute top-1/4 md:top-1/3 left-1/4 md:left-1/3 text-sm md:text-xl md:max-w-4xl bg-background rounded-lg p-2 lg:p-5">
            {AboutMe.Goals}
          </p>
          <Image
            className="max-h-96 w-auto"
            src={AboutImages.code.img}
            alt={AboutImages.code.alt}
          />
        </div>
      </div>
    </section>
  );
}
