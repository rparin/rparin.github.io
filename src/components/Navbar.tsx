import { NavLinks } from "@/constants/NavLinks";

export default function Navbar() {
  const NavItems = NavLinks.map((data) => {
    return (
      <li key={data.id}>
        <a
          className="text-xl"
          href={data?.url ? data?.url : "#" + data.id}
          target={data?.url ? "_blank" : undefined}
          rel={data?.url ? "noopener noreferrer" : undefined}>
          {data.title}
        </a>
      </li>
    );
  });

  return (
    <>
      <nav className="sticky top-0 bg-background drop-shadow-lg z-10 ">
        <ul className="flex flex-row gap-9 md:gap-12 md:justify-center py-5 ml-5 pr-5 overflow-y-auto">
          {NavItems}
        </ul>
      </nav>
    </>
  );
}
