import Image from "next/image";
import extLink from "@icons/external-link.svg";

export default function Footer() {
  return (
    <footer className="text-center text-text bg-primary py-3 md:py-3">
      <div className="flex flex-row text-center justify-center">
        <p className="text-sm">Built using React and Tailwind.</p>
        <a
          href="https://github.com/rparin/rparin.github.io"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            className="max-w-[1.5vh] invert-0 dark:invert w-auto h-3/5"
            src={extLink}
            alt="External link to source code"
          />
        </a>
      </div>
      <p className="text-sm">©️ 2023. Designed by Ralph Parin.</p>
    </footer>
  );
}
