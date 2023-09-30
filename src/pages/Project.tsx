import { ProjectItems } from "@/constants/Projects";
import Image from "next/image";

export default function Project() {
  const PItems = [];
  for (const [k, project] of Object.entries(ProjectItems)) {
    PItems.push(
      <Image
        className={project.span ? "col-span-2" : undefined}
        src={project.img}
        alt={project.alt}
      />
    );
  }

  return (
    <section
      id="projects"
      className="before:content-[''] before:h-16 md:before:h-20 before:block">
      <div className="grid auto-cols-auto md:grid-cols-4 xl:grid-cols-5 gap-3 mx-16">
        {PItems}
      </div>
    </section>
  );
}
