"use client";

import React from "react";
import { useEffect, useState } from "react";
import { NavItems, Resume } from "@/constants/NavLinks";
import { Download } from "lucide-react";

export default function Navbar({ activeId }: { activeId?: string }) {
  const [NavTags, setNavTags] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const nTags: React.ReactElement[] = [];

    for (const [k, value] of Object.entries(NavItems)) {
      nTags.push(
        <li key={value.id} className="mt-1">
          <a
            href={"#" + value.id}
            className={activeId == value.id ? "text-accent" : ""}>
            {value.title}
          </a>
        </li>
      );
    }

    setNavTags(nTags);
  }, [activeId]);

  return (
    <>
      <nav className="sticky top-[-1px] bg-background drop-shadow-lg z-10">
        <ul className="flex flex-row gap-7 md:gap-10 justify-center py-3 md:py-4 ml-5 pr-5 overflow-y-auto">
          {NavTags}

          <li>
            <form
              title="Download Resume"
              className="text-text dark:text-text bg-primary dark:bg-primary p-0 m-0 rounded-md hover:bg-secondary dark:hover:bg-secondary flex flex-row"
              method="get"
              action={Resume.url}>
              <button className="p-0 pt-1 pl-2 pr-2 pb-1" type="submit">
                {Resume.title}
              </button>
              <div className="flex justify-end bg-secondary rounded-r-md">
                <Download className="w-8 h-auto p-2 sm:p-1.5 invert dark:invert-0" />
              </div>
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
}
