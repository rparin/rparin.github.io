import { ProjectItems } from "@/constants/Projects";
import PImage from "@/components/PImage";

export default function Project({ id }: { id: string }) {
  const PItems = [];
  for (const [k, project] of Object.entries(ProjectItems)) {
    PItems.push(<PImage key={k} {...project} />);
  }

  return (
    <section id={id} className="scroll-mt-[70px]">
      <h2 className="sr-only">Projects</h2>
      <ul
        aria-label="Projects"
        className="mx-16 mt-5 grid auto-cols-auto gap-2 md:grid-cols-4 xl:grid-cols-5">
        {PItems}
      </ul>
    </section>
  );
}
