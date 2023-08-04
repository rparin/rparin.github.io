import Image from "next/image";
import gitLogo from "../app/assets/logos/Contact/Github.svg";
import inLogo from "../app/assets/logos/Contact/LinkedIn.svg";
import gmailLogo from "../app/assets/logos/Contact/GMail.svg";

const inInfo = {
  href: "https://www.linkedin.com/in/rparin",
  src: inLogo,
  alt: "Linkedin Logo",
};

const gitInfo = {
  href: "https://github.com/rparin",
  src: gitLogo,
  alt: "Github Logo",
};

const emailInfo = {
  href: "mailto:r.parin070@gmail.com",
  src: gmailLogo,
  alt: "GMail Logo",
};

export default function Contact() {
  const info = [inInfo, gitInfo, emailInfo];
  var cInfos = [];
  for (var i = 0; i < info.length; i++) {
    cInfos.push(
      <a href={info[i].href} target="_blank" rel="noopener noreferrer" key={i}>
        <Image
          className="max-h-[12vh] p-1 w-14 2xl:w-52 2xl:p-4 h-auto drop-shadow-xl hover:p-0"
          src={info[i].src}
          alt={info[i].alt}
        />
      </a>
    );
  }
  return (
    <section
      id="contact"
      className="flex min-h-[90vh] flex-col text-center justify-center items-center">
      <h2>Contact Me</h2>
      <p className="pb-1">Feel free to reach out! I don't bite.</p>
      <div className="flex flex-wrap justify-center items-center gap-6 2xl:gap-0.5">
        {cInfos}
      </div>
    </section>
  );
}
