import Image from "next/image";
import extLink from "@icons/external-link.svg";

export default function Footer() {
  return (
    <footer className="text-center text-white bg-black py-3 md:py-5">
      <div className="flex flex-row text-center justify-center">
        <p>Built using React and Tailwind.</p>
        <a
          href="https://github.com/rparin/rparin.github.io"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            className="max-w-[1.5vh] invert w-auto h-3/5"
            src={extLink}
            alt="External link to source code"
          />
        </a>
      </div>
      <p>©️ 2023. Designed by Ralph Parin.</p>
    </footer>
  );
}
