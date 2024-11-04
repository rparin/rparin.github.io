"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavItems, Resume } from "@/constants/NavLinks";
import { ExternalLink } from "lucide-react";

export default function Navbar({ activeId }: { activeId?: string }) {
  const [NavTags, setNavTags] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    const nTags: React.ReactElement[] = [];

    for (const [k, value] of Object.entries(NavItems)) {
      nTags.push(
        <li key={value.id} className="mt-1">
          <Link
            replace={true}
            href={"#" + value.id}
            className={activeId == value.id ? "text-accent" : ""}>
            {value.title}
          </Link>
        </li>
      );
    }

    setNavTags(nTags);
  }, [activeId]);

  return (
    <>
      <nav className="sticky top-[-1px] z-10 bg-background drop-shadow-lg">
        <ul className="ml-5 flex flex-row justify-center gap-7 overflow-y-auto py-3 pr-5 md:gap-10 md:py-4">
          {NavTags}
          <li>
            <form
              className="m-0 flex flex-row rounded-md bg-primary p-0 text-text hover:bg-secondary dark:bg-primary dark:text-text dark:hover:bg-secondary"
              method="get"
              action={Resume.url}>
              <button
                aria-label="View Ralph's Resume"
                className="p-0 pb-1 pl-2 pr-2 pt-1"
                type="submit">
                {Resume.title}
              </button>
              <div className="flex justify-end rounded-r-md bg-secondary">
                <ExternalLink className="h-auto w-8 p-2 invert dark:invert-0 sm:p-1.5" />
              </div>
            </form>
          </li>
        </ul>
      </nav>
    </>
  );
}
