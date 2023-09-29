import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Project from "@/pages/Project";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function App() {
  return (
    <main>
      <ModeToggle />
      <Landing />
      <Navbar />
      <Project />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
