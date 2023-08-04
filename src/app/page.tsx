import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Project from "@/pages/Project";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function main() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Project />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}