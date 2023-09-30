import { ProjectItems } from "@/constants/Projects";
import Image from "next/image";

export default function Project() {
  const PItems = [];
  for (const [k, project] of Object.entries(ProjectItems)) {
    PItems.push(
      <Image
        key={k}
        className={project.span ? "col-span-2" : undefined}
        src={project.img}
        alt={project.alt}
      />
    );
  }

  return (
    <section>
      <div className="mt-5 grid auto-cols-auto md:grid-cols-4 xl:grid-cols-5 gap-3 mx-16">
        {PItems}
      </div>
    </section>
  );
}
