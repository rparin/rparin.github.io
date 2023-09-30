import landBgR from "../assets/Landing/Red.png";
import landBgP from "../assets/Landing/Purple.png";
import landCode from "../assets/Landing/CodePy.png";
import gitIcon from "@icons/Github.svg";
import linkedIcon from "@icons/LinkedIn.svg";

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

const Icons = {
  github: {
    img: gitIcon,
    alt: "Icon of Github logo",
  },
  linkedin: {
    img: linkedIcon,
    alt: "Icon of LinkedIn logo",
  },
};

export { HomeImages, Icons };
