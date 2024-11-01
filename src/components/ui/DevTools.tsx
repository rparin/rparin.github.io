"use client";

import Image from "next/image";
import { pType } from "@/constants/Projects";
import { useRef, useState, useEffect } from "react";

export default function DevTools({ tools }: { tools: pType["icons"] }) {
  const [activeTool, setActiveTool] = useState(-1);
  const devRefs = useRef<Array<HTMLAnchorElement>>([]);
  const addToRefs = (el: HTMLAnchorElement) => {
    if (el && !devRefs.current.includes(el)) {
      devRefs.current.push(el);
    }
  };

  const icon_cn = "h-auto w-7 md:w-10 lg:w-14 md:p-1";
  const devTools = tools.map((icon) => {
    return (
      <li key={icon.alt}>
        <a
          aria-label={icon.name}
          ref={addToRefs}
          tabIndex={-1}
          href={icon.url}
          target={icon.url ? "_blank" : undefined}
          rel={icon.url ? "noopener noreferrer" : undefined}>
          <Image
            aria-hidden="true"
            className={icon.invert ? icon_cn + "invert-0 dark:invert" : icon_cn}
            src={icon.img}
            alt={icon.alt}
          />
        </a>
      </li>
    );
  });

  useEffect(() => {
    if (activeTool != -1 && devRefs.current[activeTool]) {
      devRefs.current[activeTool].focus();
    }
  }, [activeTool]);

  const keyListNav = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (activeTool === tools.length - 1) {
          setActiveTool(0);
        } else {
          setActiveTool(activeTool + 1);
        }
        break;

      case "ArrowUp":
        e.preventDefault();
        if (activeTool === 0) {
          setActiveTool(tools.length - 1);
        } else {
          setActiveTool(activeTool - 1);
        }
        break;

      case "Home":
        e.preventDefault();
        setActiveTool(0);
        break;

      case "End":
        e.preventDefault();
        setActiveTool(tools.length - 1);
        break;

      default:
        //Nothing
        break;
    }
  };

  return (
    <ul
      aria-label="Dev Tools"
      className="p-scroll row-span-3 mx-1 mt-1 flex flex-col items-center justify-start gap-2 overflow-y-auto md:row-span-4 lg:mt-2"
      onKeyDown={keyListNav}>
      {devTools}
    </ul>
  );
}
