import { NavItems, Resume } from "@/constants/NavLinks";
import Image from "next/image";
import { Icons } from "@/constants/Images";

export default function Navbar() {
  const NavTags = [];
  for (const [k, value] of Object.entries(NavItems)) {
    NavTags.push(
      <li key={value.id} className="mt-1">
        <a href={"#" + value.id}>{value.title}</a>
      </li>
    );
  }

  return (
    <>
      <nav className="sticky top-0 bg-background drop-shadow-lg z-10">
        <ul className="flex flex-row gap-7 md:gap-10 justify-center py-3 md:py-4 ml-5 pr-5 overflow-y-auto">
          {NavTags}

          <li>
            <button className="text-text dark:text-text bg-primary dark:bg-primary p-0 m-0 rounded-md hover:bg-secondary dark:hover:bg-secondary">
              <a href={Resume.url} className="flex flex-row">
                <span className="p-0 pt-1 pl-2 pr-2">Resume</span>
                <div className="flex justify-end bg-secondary rounded-r-md">
                  <Image
                    className="w-8 h-8 p-2 sm:p-1.5 invert dark:invert-0"
                    src={Icons.download.img}
                    alt={Icons.download.alt}
                  />
                </div>
              </a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
