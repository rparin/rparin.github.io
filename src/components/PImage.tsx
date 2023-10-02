import Image from "next/image";
import { pType } from "@/constants/Projects";
import { SocialIcons } from "@/constants/Icons";

export default function PImage(project: pType) {
  const cn = "h-auto w-6 md:w-10 p-1";
  const codeTags = project.icons.map((icon) => {
    return (
      <Image
        key={icon.alt}
        className={icon.invert ? cn + "invert-0 dark:invert" : cn}
        src={icon.img}
        alt={icon.alt}
      />
    );
  });

  return (
    <div className={project.span ? "relative col-span-2" : "relative"}>
      <a
        href={project.url}
        target={project.url ? "_blank" : undefined}
        rel={project.url ? "noopener noreferrer" : undefined}>
        <div className="grid grid-cols-4 grid-rows-4 md:grid-cols-5 md:grid-rows-5 absolute opacity-0 min-[320px]:hover:opacity-100 text-text text-base font-semibold bg-gradient-to-t from-background from-1% backdrop-blur-md">
          <Image
            className="col-span-3 row-span-3 md:col-span-4 md:row-span-4"
            src={project.img}
            alt={project.alt}
          />
          <div className="row-span-3 md:row-span-4 flex flex-col justify-start md:justify-center items-center mx-1 gap-2 overflow-y-auto max-h-24 md:max-h-none">
            {codeTags}
          </div>
          <div className="col-span-4 md:col-span-5 flex flex-row justify-center items-center gap-2 truncate">
            {project.name}
            {project.url && (
              <Image
                className="w-auto h-5 md:h-7 dark:invert"
                src={SocialIcons.github.img}
                alt={SocialIcons.github.alt}
              />
            )}
          </div>
        </div>
      </a>
      <Image src={project.img} alt={project.alt} />
    </div>
  );
}
