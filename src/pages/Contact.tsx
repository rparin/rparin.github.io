import { AboutGen, Socials } from "@/constants/About";
import { Icons } from "@/constants/Images";
import { NavItems } from "@/constants/NavLinks";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id={NavItems.contact.id}
      className="flex flex-col text-center before:content-[''] before:h-20 before:block mx-5 lg:mx-16">
      <div className="min-h-[45vh]">
        <h2 className="font-normal mt-10 text-2xl md:text-3xl">Get In Touch</h2>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <a href={"mailto:" + AboutGen.email}>
            <Image
              className="max-h-[12vh] p-1 w-14 h-auto drop-shadow-xl hover:p-0"
              src={Icons.gmail.img}
              alt={Icons.gmail.alt}
            />
          </a>
          <a href={Socials.linkedIn} target="_blank" rel="noopener noreferrer">
            <Image
              className="max-h-[12vh] p-1 w-14  h-auto drop-shadow-xl hover:p-0"
              src={Icons.linkedin.img}
              alt={Icons.linkedin.alt}
            />
          </a>
          <a href={Socials.github} target="_blank" rel="noopener noreferrer">
            <Image
              className="max-h-[12vh] p-1 w-14 h-auto drop-shadow-xl hover:p-0 dark:invert"
              src={Icons.github.img}
              alt={Icons.github.alt}
            />
          </a>
        </div>
      </div>

      <p className="mt-3 mb-3">Thanks for visiting!</p>
    </section>
  );
}
