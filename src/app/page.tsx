"use client";

import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Project from "@/pages/Project";
import Contact from "@/pages/Contact";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
import ScrollHighlightNavbar from "@/components/ui/ScrollHighlightNavbar";
import { nv } from "@/lib/navRefs";

export default function App() {
  const navHeader = nv();

  const cn =
    "h-[50vh] flex justify-center text-center items-center h-fill text-5xl ";
  return (
    <main className="bg-background text-text">
      <Landing />
      <Navbar />
      <ScrollHighlightNavbar navHeader={navHeader} />
      <div
        className={cn + "bg-red-950"}
        ref={navHeader[0].headerRef}
        id="section1">
        1
      </div>

      <div
        className={cn + "bg-blue-950"}
        ref={navHeader[1].headerRef}
        id="section2">
        2
      </div>

      <div
        className={cn + "bg-green-950"}
        ref={navHeader[2].headerRef}
        id="section3">
        3
      </div>

      <div
        className={cn + "bg-purple-950"}
        ref={navHeader[3].headerRef}
        id="section4">
        4
      </div>

      {/* <Project />
      <About />
      <Contact />
      <Footer /> */}
    </main>
  );
}
