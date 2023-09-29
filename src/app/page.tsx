import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Project from "@/pages/Project";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function App() {
  return (
    <main>
      <ThemeToggle />
      <Landing />
      <Navbar />
      <Project />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
