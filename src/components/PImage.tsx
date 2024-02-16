import Image from "next/image";
import { pType } from "@/constants/Projects";
import { SocialIcons } from "@/constants/Icons";

export default function PImage(project: pType) {
  const demoOn = true;
  const icon_cn = "h-auto w-7 md:w-10 lg:w-14 md:p-1";
  const codeTags = project.icons.map((icon) => {
    return (
      <a
        key={icon.alt}
        href={icon.url}
        target={icon.url ? "_blank" : undefined}
        rel={icon.url ? "noopener noreferrer" : undefined}>
        <Image
          className={icon.invert ? icon_cn + "invert-0 dark:invert" : icon_cn}
          src={icon.img}
          alt={icon.alt}
        />
      </a>
    );
  });

  const demo_cn =
    "col-span-3 row-span-3 md:col-span-4 md:row-span-4 object-fill";
  var demoImage = (
    <Image className={demo_cn} src={project.img} alt={project.alt} />
  );
  if (demoOn && project.demo) {
    demoImage = (
      <Image
        className={demo_cn}
        src={project.demo.img}
        alt={project.demo.alt}
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
        <div className="p-scroll mt-1 lg:mt-2 row-span-3 md:row-span-4 flex flex-col justify-start items-center mx-1 gap-2 overflow-y-auto">
          <ul>{codeTags}</ul>
        </div>
        <div className="col-span-4 md:col-span-5 flex flex-row justify-center items-center gap-2 truncate">
          {project.name}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <Image
                className="w-auto h-5 md:h-7 dark:invert"
                src={SocialIcons.github.img}
                alt={SocialIcons.github.alt}
              />
            </a>
          )}
        </div>
      </div>
      <Image src={project.img} alt={project.alt} />
    </div>
  );
}
