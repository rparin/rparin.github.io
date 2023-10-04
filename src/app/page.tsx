import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Project from "@/pages/Project";
import Contact from "@/pages/Contact";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";
import ScrollSpy from "@/components/ui/ScrollSpy";

export default function App() {
  return (
    <main className="bg-background text-text">
      <Landing />
      <ScrollSpy navbar={<Navbar />}>
        <Project />
        <About />
        <Contact />
        <Footer />
      </ScrollSpy>
    </main>
  );
}
