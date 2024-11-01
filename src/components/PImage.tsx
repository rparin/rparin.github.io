import Image from "next/image";
import DevTools from "@/components/ui/DevTools";
import { pType } from "@/constants/Projects";
import { SocialIcons } from "@/constants/Icons";
import { ExternalLink } from "lucide-react";

export default function PImage(project: pType) {
  const demoOn = true;
  const demo_cn = "col-span-3 row-span-3 md:col-span-4 md:row-span-4";
  var demoImage = (
    <Image
      className={demo_cn}
      src={project.img}
      alt={project.alt}
      width={project.span ? 1912 : 956}
      height={924}
      loading="lazy"
      // placeholder="blur"
      // blurDataURL={project.img}
    />
  );
  if (demoOn && project.demo) {
    demoImage = (
      <Image
        className={demo_cn}
        src={project.demo.img}
        alt={project.demo.alt}
        width={project.span ? 1912 : 956}
        height={924}
        loading="lazy"
        // placeholder="blur"
        // blurDataURL={project.demo.img}
      />
    );
  }

  return (
    <>
      <div className="from-1% absolute hidden max-h-full w-auto grid-cols-4 grid-rows-4 bg-gradient-to-t from-background text-base font-semibold text-text backdrop-blur-md group-focus-within:grid group-hover:grid md:grid-cols-5 md:grid-rows-5">
        {demoImage}
        <DevTools tools={project.icons} />
        <div className="col-span-4 flex flex-row items-center justify-center gap-1 truncate md:col-span-5">
          {project.name}
          {project.website && (
            <a
              href={project.website}
              title={`${project.name} Website`}
              aria-label={`${project.name} Website`}
              target="_blank"
              rel="noopener noreferrer">
              <ExternalLink className="mb-2 h-3 w-auto md:h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              title={`${project.name} Github`}
              aria-label={`${project.name} Github`}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="ml-1 h-5 w-auto dark:invert md:h-7"
                src={SocialIcons.github.img}
                alt={SocialIcons.github.alt}
              />
            </a>
          )}
        </div>
      </div>
      <Image
        src={project.img}
        alt={project.alt}
        width={project.span ? 1912 : 956}
        height={924}
        loading="lazy"
        // placeholder="blur"
        // blurDataURL={project.img}
      />
    </>
  );
}
