import { Icon } from "./Icons";
import { CodeIcons as ci } from "./Icons";
import CTMap from "@project/CTMap.png";
import FViewer from "@project/FViewer.png";
import GCalc from "@project/GCalc.png";
import PPSim from "@project/PreyPredSim.png";
import SSearch from "@project/Search.png";
import STracker from "@project/Sleep Tracker.png";
import Sudoku from "@project/Sudoku.png";
import TEditor from "@project/TextEditor.png";
import { StaticImageData } from "next/image";

type pType = {
  name: string;
  img: StaticImageData;
  alt: string;
  span?: boolean;
  url?: string;
  icons: Array<Icon>;
};

const Projects = {
  CTMap: {
    name: "Clinical Trials Map",
    img: CTMap,
    alt: "Clinical Trials Map App Screenshot",
    span: true,
    url: "https://github.com/rparin/CTMap",
    icons: [ci.react, ci.nodejs, ci.tailwind, ci.ts],
  },
  STracker: {
    name: "Sleep Tracker",
    img: STracker,
    alt: "Sleep Tracker App Screenshot",
    span: true,
    url: "https://github.com/rparin/Sleep-Tracker",
    icons: [ci.angular, ci.fbase, ci.ionic],
  },
  Sudoku: {
    name: "Sudoku",
    img: Sudoku,
    alt: "Sudoku Help Menu Screenshot",
    url: "https://github.com/rparin/Sudoku",
    icons: [ci.python, ci.pygame],
  },
  PPSim: {
    name: "Prey Predator Sim",
    img: PPSim,
    alt: "Prey Predator Simulation Screenshot",
    url: undefined,
    icons: [ci.cpp, ci.sfml],
  },
  FViewer: {
    name: "Font Viewer",
    img: FViewer,
    alt: "Font Viewer App Screenshot",
    span: true,
    url: "https://github.com/rparin/Font-Viewer",
    icons: [ci.angular, ci.fbase, ci.tensflow],
  },
  GCalc: {
    name: "Graphing Calculator",
    img: GCalc,
    alt: "Graphing Calculator App Screenshot",
    span: true,
    url: "https://github.com/rparin/Graphing-Calculator",
    icons: [ci.cpp, ci.sfml],
  },
  TEditor: {
    name: "Text Editor",
    img: TEditor,
    alt: "Text Editor Screenshot",
    url: "https://github.com/rparin/JText-Editor",
    icons: [ci.java],
  },
  SSearch: {
    name: "Search Engine",
    img: SSearch,
    alt: "Search App Screenshot",
    span: true,
    url: "https://github.com/rparin/StellerSearch",
    icons: [ci.python, ci.openai, ci.flask, ci.pandas],
  },
};

// Items will be displayed based on array order
const ProjectItems: Array<pType> = [
  Projects.CTMap,
  Projects.STracker,
  Projects.Sudoku,
  Projects.PPSim,
  Projects.SSearch,
  Projects.GCalc,
  Projects.FViewer,
  Projects.TEditor,
];

export { Projects, ProjectItems };
export type { pType };
