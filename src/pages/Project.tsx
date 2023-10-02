import { Icons } from "@/constants/Images";
import { ProjectItems } from "@/constants/Projects";
import Image from "next/image";

export default function Project() {
  const PItems = [];
  for (const [k, project] of Object.entries(ProjectItems)) {
    PItems.push(
      <Image
        key={k}
        className={project.span ? "col-span-2" : undefined}
        src={project.img}
        alt={project.alt}
      />
    );
  }

  return (
    <section>
      <div className="mt-5 grid auto-cols-auto md:grid-cols-4 xl:grid-cols-5 gap-2 mx-16">
        {/* Start of PImage */}
        <div className="col-span-2 relative bg-background">
          <div className="absolute opacity-0 min-[320px]:hover:opacity-100 text-text text-base font-semibold grid grid-cols-4 grid-rows-4 md:grid-cols-5 md:grid-rows-5 bg-background">
            <Image
              className="col-span-3 row-span-3 md:col-span-4 md:row-span-4"
              src={ProjectItems[0].img}
              alt={ProjectItems[0].alt}
            />
            <div className="row-span-3 md:row-span-4 flex flex-col justify-end items-center mx-2 gap-2">
              <img
                alt="build:passing"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              />
            </div>
            <div className="col-span-4 md:col-span-5 flex flex-row justify-center items-center gap-2">
              {ProjectItems[0].name}
              <Image
                className="w-auto h-5 md:h-7 dark:invert"
                src={Icons.github.img}
                alt={Icons.github.alt}
              />
            </div>
          </div>
          <Image src={ProjectItems[0].img} alt={ProjectItems[0].alt} />
        </div>

        {/* {PItems} */}
      </div>
    </section>
  );
}
