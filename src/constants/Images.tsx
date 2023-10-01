import landBgR from "../assets/Landing/Red.png";
import landBgP from "../assets/Landing/Purple.png";
import landCode from "../assets/Landing/CodePy.png";
import AboutCode from "../assets/About/CodeE.png";
import AboutFood from "../assets/About/FoodE.png";
import AboutGame from "../assets/About/LaptopE.png";
import AboutBook from "../assets/About/BookE.png";
import gitIcon from "@icons/Github.svg";
import linkedIcon from "@icons/LinkedIn.svg";
import gmailIcon from "@icons/GMail.svg";
import dowloadIcon from "@icons/Download.svg";

const HomeImages = {
  bgR: {
    img: landBgR,
    alt: "Landing page background",
  },
  bgP: {
    img: landBgP,
    alt: "Landing page background",
  },
  code: {
    img: landCode,
    alt: "Landing page code background overlay",
  },
};

const AboutImages = {
  code: {
    img: AboutCode,
    alt: "Background image of study room",
  },
  book: {
    img: AboutBook,
    alt: "Background image of book in forest",
  },
  food: {
    img: AboutFood,
    alt: "Background image of food in cafe",
  },
  game: {
    img: AboutGame,
    alt: "Background image of laptop in urban city",
  },
};

const Icons = {
  github: {
    img: gitIcon,
    alt: "Icon of Github logo",
  },
  linkedin: {
    img: linkedIcon,
    alt: "Icon of LinkedIn logo",
  },
  gmail: {
    img: gmailIcon,
    alt: "Icon of Gmail logo",
  },
  download: {
    img: dowloadIcon,
    alt: "Icon of download",
  },
};

export { HomeImages, AboutImages, Icons };
