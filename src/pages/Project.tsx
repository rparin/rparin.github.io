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
            ? "group relative col-span-2 md:hover:overflow-y-auto"
            : "group relative md:hover:overflow-y-auto"
        }>
        <PImage {...project} />
      </li>
    );
  }

  return (
    <section id={id} className="scroll-mt-[70px]">
      <h2 className="sr-only">Projects</h2>
      <ul className="mx-16 mt-5 grid auto-cols-auto gap-2 md:grid-cols-4 xl:grid-cols-5">
        {PItems}
      </ul>
    </section>
  );
}
