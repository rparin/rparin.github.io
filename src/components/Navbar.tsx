export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex flex-row gap-2 justify-center">
        <li>
          <a className="" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a
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
