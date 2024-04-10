import Image from "next/image";
import { pType } from "@/constants/Projects";
import { SocialIcons } from "@/constants/Icons";
import { ExternalLink } from "lucide-react";

export default function PImage(project: pType) {
  const demoOn = true;
  const icon_cn = "h-auto w-7 md:w-10 lg:w-14 md:p-1";
  const devTools = project.icons.map((icon) => {
    return (
      <li key={icon.alt}>
        <a
          href={icon.url}
          target={icon.url ? "_blank" : undefined}
          rel={icon.url ? "noopener noreferrer" : undefined}>
          <Image
            className={icon.invert ? icon_cn + "invert-0 dark:invert" : icon_cn}
            src={icon.img}
            alt={icon.alt}
          />
        </a>
      </li>
    );
  });

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
    <div
      className={
        project.span
          ? "col-span-2 relative md:hover:overflow-y-auto group"
          : "relative md:hover:overflow-y-auto group"
      }>
      <div className="absolute hidden group-hover:grid grid-cols-4 grid-rows-4 md:grid-cols-5 md:grid-rows-5 text-text text-base font-semibold bg-gradient-to-t from-background from-1% backdrop-blur-md w-auto max-h-full">
        {demoImage}
        <ul className="p-scroll mt-1 lg:mt-2 row-span-3 md:row-span-4 flex flex-col justify-start items-center mx-1 gap-2 overflow-y-auto">
          {devTools}
        </ul>
        <div className="col-span-4 md:col-span-5 flex flex-row justify-center items-center gap-1 truncate">
          {project.name}
          {project.website && (
            <a
              href={project.website}
              aria-label={`${project.name} website`}
              target="_blank"
              rel="noopener noreferrer">
              <ExternalLink className="w-auto h-3 md:h-4 mb-2" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              aria-label={`${project.name} github`}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="w-auto h-5 md:h-7 dark:invert ml-1"
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
    </div>
  );
}
