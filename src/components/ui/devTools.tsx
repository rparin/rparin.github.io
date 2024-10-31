import Image from "next/image";
import { pType } from "@/constants/Projects";

export default function DevTools({ tools }: { tools: pType["icons"] }) {
  const icon_cn = "h-auto w-7 md:w-10 lg:w-14 md:p-1";
  const devTools = tools.map((icon) => {
    return (
      <li key={icon.alt}>
        <a
          title={icon.name}
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
  return (
    <ul className="p-scroll row-span-3 mx-1 mt-1 flex flex-col items-center justify-start gap-2 overflow-y-auto md:row-span-4 lg:mt-2">
      {devTools}
    </ul>
  );
}
