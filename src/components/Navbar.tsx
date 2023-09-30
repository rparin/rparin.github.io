export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 bg-background drop-shadow-lg z-10 ">
        <ul className="flex flex-row gap-10 md:gap-12 md:justify-center pt-12 pb-3 md:py-5 ml-5 pr-5 overflow-y-auto">
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
    </>
  );
}
