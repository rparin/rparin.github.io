import Image from "next/image";
import extLink from "../assets/icons/external-link.svg";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="flex flex-row text-center justify-center">
        Built using React and Tailwind.
        <a
          href="https://github.com/rparin/rparin.github.io"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            className="max-w-[1.5vh] invert w-auto h-3 2xl:h-10"
            src={extLink}
            alt="External link to source code"
          />
        </a>
      </div>
      ©️ 2023. Designed by Ralph Parin.
    </footer>
  );
}
