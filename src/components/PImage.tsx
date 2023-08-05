import Image, { StaticImageData } from "next/image";
import gCalc from "../app/assets/Projects/GCalc.png";

type pImage = {
  name: string;
  alt: string;
  src: StaticImageData;
  desc: string;
  link?: string;
};

export default function PImage(img: pImage) {
  return (
    <div className=" text-black relative [&>a]:hover:visible [&>a]:hover:opacity-100">
      <Image
        className="object-cover h-44 w-80 lg:h-80 lg:w-80 2xl:w-96"
        src={img.src}
        alt={img.alt}
      />
      <a
        className="lg:flex flex-col justify-end absolute invisible bottom-0 h-44 w-80 lg:h-80 lg:w-80 2xl:w-96 lg:hover:bg-gradient-to-b from-slate-50/0 to-gray-900/70 pb-3"
        href={img.link}
        target="_blank"
        rel="noopener noreferrer">
        <div className="hidden lg:block text-white ">
          <p className="text-sm px-2 font-bold">{img.name}</p>
          <p className="text-xs px-10">{img.desc}</p>
        </div>
      </a>
    </div>
  );
}
