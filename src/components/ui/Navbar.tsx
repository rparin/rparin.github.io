import { NavItems } from "@/constants/NavLinks";

export default function Navbar() {
  const NavTags = [];
  for (const [key, value] of Object.entries(NavItems)) {
    NavTags.push(
      <li key={value.id}>
        <a
          className="text-xl"
          href={value?.url ? value?.url : "#" + value.id}
          target={value?.url ? "_blank" : undefined}
          rel={value?.url ? "noopener noreferrer" : undefined}>
          {value.title}
        </a>
      </li>
    );
  }

  return (
    <>
      <nav className="sticky top-0 bg-background drop-shadow-lg z-10 ">
        <ul className="flex flex-row gap-9 md:gap-12 md:justify-center py-5 ml-5 pr-5 overflow-y-auto">
          {NavTags}
        </ul>
      </nav>
    </>
  );
}
