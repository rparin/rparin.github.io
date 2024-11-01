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
      aria-hidden="true"
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
        aria-hidden="true"
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
    <li
      tabIndex={0}
      className={
        project.span
          ? "group relative col-span-2 md:hover:overflow-y-auto"
          : "group relative md:hover:overflow-y-auto"
      }>
      <div
        role="grid"
        aria-label={project.name}
        className="from-1% absolute hidden max-h-full w-auto grid-cols-4 grid-rows-4 bg-gradient-to-t from-background text-base font-semibold text-text backdrop-blur-md group-focus-within:grid group-hover:grid md:grid-cols-5 md:grid-rows-5">
        {demoImage}
        <DevTools tools={project.icons} />
        <div
          role="row"
          className="col-span-4 flex flex-row items-center justify-center gap-1 truncate md:col-span-5">
          <span role="rowheader">{project.name}</span>
          {project.website && (
            <span role="cell">
              <a
                aria-label="Website"
                href={project.website}
                target="_blank"
                rel="noopener noreferrer">
                <ExternalLink className="mb-2 h-3 w-auto md:h-4" />
              </a>
            </span>
          )}
          {project.github && (
            <span role="cell">
              <a
                aria-label="Github"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer">
                <Image
                  aria-hidden="true"
                  className="ml-1 h-5 w-auto dark:invert md:h-7"
                  src={SocialIcons.github.img}
                  alt={SocialIcons.github.alt}
                />
              </a>
            </span>
          )}
        </div>
      </div>
      <Image
        aria-hidden="true"
        src={project.img}
        alt={project.alt}
        width={project.span ? 1912 : 956}
        height={924}
        loading="lazy"
        // placeholder="blur"
        // blurDataURL={project.img}
      />
    </li>
  );
}
