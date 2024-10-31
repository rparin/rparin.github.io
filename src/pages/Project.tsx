import { ProjectItems } from "@/constants/Projects";
import PImage from "@/components/PImage";

export default function Project({ id }: { id: string }) {
  const PItems = [];
  for (const [k, project] of Object.entries(ProjectItems)) {
    PItems.push(
      <li
        tabIndex={0}
        key={k}
        className={
          project.span
            ? "col-span-2 relative md:hover:overflow-y-auto group"
            : "relative md:hover:overflow-y-auto group"
        }>
        <PImage {...project} />
      </li>
    );
  }

  return (
    <section id={id} className="scroll-mt-[70px]">
      <h2 className="sr-only">Projects</h2>
      <ul className="mt-5 grid auto-cols-auto md:grid-cols-4 xl:grid-cols-5 gap-2 mx-16">
        {PItems}
      </ul>
    </section>
  );
}
