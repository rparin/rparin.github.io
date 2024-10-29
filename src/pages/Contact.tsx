import { AboutGen, Socials } from "@/constants/About";
import { SocialIcons } from "@/constants/Icons";
import Image from "next/image";

export default function Contact({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="flex flex-col text-center before:content-[''] before:h-20 before:block mx-5 lg:mx-16">
      <div className="min-h-[45vh]">
        <h3 className="font-normal mt-10 text-2xl md:text-3xl">Get In Touch</h3>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
          <a title={SocialIcons.gmail.name} href={"mailto:" + AboutGen.email}>
            <Image
              className="max-h-[12vh] p-1 w-14 h-auto drop-shadow-xl hover:p-0"
              src={SocialIcons.gmail.img}
              alt={SocialIcons.gmail.alt}
            />
          </a>
          <a
            title={SocialIcons.linkedin.name}
            href={Socials.linkedIn}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="max-h-[12vh] p-1 w-14  h-auto drop-shadow-xl hover:p-0"
              src={SocialIcons.linkedin.img}
              alt={SocialIcons.linkedin.alt}
            />
          </a>
          <a
            title={SocialIcons.github.name}
            href={Socials.github}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="max-h-[12vh] p-1 w-14 h-auto drop-shadow-xl hover:p-0 dark:invert"
              src={SocialIcons.github.img}
              alt={SocialIcons.github.alt}
            />
          </a>
        </div>
      </div>

      <p className="mt-3 mb-3">Thanks for visiting!</p>
    </section>
  );
}
