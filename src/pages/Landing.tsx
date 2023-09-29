import Image from "next/image";
import { HomeImages } from "@/constants/Images";

export default function Landing() {
  return (
    <section id="home">
      <div>
        <div className="h-[50vh] w-[100%] bg-gradient-to-t from-background absolute z-50"></div>

        <Image
          className="h-[50vh] w-[60%] object-cover absolute z-40 right-0 opacity-80"
          src={HomeImages.code.img}
          alt={HomeImages.code.alt}
        />
        <Image
          className="h-[50vh] w-[100%] object-cover"
          src={HomeImages.bg.img}
          alt={HomeImages.bg.alt}
        />
      </div>
    </section>
  );
}
