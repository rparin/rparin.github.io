"use client";
import { useState, useRef, useEffect } from "react";
import Hamburger from "./Hamburger";

// import x from '../../public/Resume.pdf'

export default function Navbar() {
  const [isHamburgerOpen, setHamburgerState] = useState(false);

  const toggleHamburger = () => {
    setHamburgerState(!isHamburgerOpen);
  };

  const closeHamburger = () => {
    setHamburgerState(false);
  };

  const navRef = useRef<any>();
  useEffect(() => {
    const handler = (event: any) => {
      if (
        isHamburgerOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        closeHamburger();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 px-14 w-full md:flex backdrop-blur-md 2xl:backdrop-blur-xl 2xl:pt-6 pt-3 pb-2 md:pt-1 md:pb-1 2xl:pb-4 bg-slate-900/0 2xl:px-44 z-50">
      <div className="flex flex-row w-full justify-between text-2xl">
        <a href="#home" className="hidden md:block">
          <b>Ralph Parin</b>
        </a>
        <a onClick={closeHamburger} href="#home" className="block md:hidden">
          <b>RP</b>
        </a>
        <div onClick={toggleHamburger} className="md:hidden mt-0.5">
          <Hamburger />
        </div>
      </div>

      <div className={isHamburgerOpen ? "block" : "hidden md:block"}>
        <ul className="flex flex-col text-center gap-4 md:flex md:flex-row md:gap-5 md:mt-0 2xl:gap-14">
          <li>
            <a
              className="px-24 md:px-0"
              onClick={closeHamburger}
              href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="px-24 md:px-0" onClick={closeHamburger} href="#about">
              About
            </a>
          </li>
          <li>
            <a
              className="px-24 md:px-0"
              onClick={closeHamburger}
              href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a
              onClick={closeHamburger}
              href="../../public/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
