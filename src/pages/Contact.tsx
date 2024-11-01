import { AboutGen, Socials } from "@/constants/About";
import { SocialIcons } from "@/constants/Icons";
import Image from "next/image";

export default function Contact({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="mx-5 flex flex-col text-center before:block before:h-20 before:content-[''] lg:mx-16">
      <div className="min-h-[45vh]">
        <h2 className="mt-10 text-2xl font-normal md:text-3xl">Get In Touch</h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a aria-label="Email Ralph" href={"mailto:" + AboutGen.email}>
            <Image
              className="h-auto max-h-[12vh] w-14 p-1 drop-shadow-xl hover:p-0"
              src={SocialIcons.gmail.img}
              alt={SocialIcons.gmail.alt}
            />
          </a>
          <a
            aria-label="Ralph's LinkedIn"
            href={Socials.linkedIn}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="h-auto max-h-[12vh] w-14 p-1 drop-shadow-xl hover:p-0"
              src={SocialIcons.linkedin.img}
              alt={SocialIcons.linkedin.alt}
            />
          </a>
          <a
            aria-label="Ralph's Github"
            href={Socials.github}
            target="_blank"
            rel="noopener noreferrer">
            <Image
              className="h-auto max-h-[12vh] w-14 p-1 drop-shadow-xl hover:p-0 dark:invert"
              src={SocialIcons.github.img}
              alt={SocialIcons.github.alt}
            />
          </a>
        </div>
      </div>

      <h3 className="mb-3 mt-3 text-base font-normal">Thanks for visiting!</h3>
    </section>
  );
}
