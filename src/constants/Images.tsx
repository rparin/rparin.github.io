import landBgR from "../assets/Landing/Red.svg";
import landBgP from "../assets/Landing/Purple.svg";
import landCode from "../assets/Landing/CodePy.webp";
import AboutCode from "../assets/About/CodeE.webp";
import AboutFood from "../assets/About/FoodE.webp";
import AboutGame from "../assets/About/LaptopE.webp";
import AboutBook from "../assets/About/BookE.webp";

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

export { HomeImages, AboutImages };
