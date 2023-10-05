import { ProjectItems } from "@/constants/Projects";
import PImage from "@/components/PImage";

export default function Project({ id }: { id: string }) {
  const PItems = [];
  for (const [k, project] of Object.entries(ProjectItems)) {
    PItems.push(<PImage key={k} {...project} />);
  }

  return (
    <section id={id} className="scroll-mt-[70px]">
      <div className="mt-5 grid auto-cols-auto md:grid-cols-4 xl:grid-cols-5 gap-2 mx-16">
        {PItems}
      </div>
    </section>
  );
}
