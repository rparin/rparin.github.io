export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex flex-row gap-10 md:gap-12 justify-center">
        <li>
          <a className="text-xl" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="text-xl" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="text-xl" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
            className="text-xl"
            href="https://raw.githubusercontent.com/rparin/rparin.github.io/main/public/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
