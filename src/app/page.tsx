import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Project from "@/pages/Project";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
export default function App() {
  return (
    <main className="bg-background text-text">
      <Landing />
      <Navbar />
      <Project />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
