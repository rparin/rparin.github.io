import { StaticImageData } from "next/image";
import { Img } from "./Icons";
import { CodeIcons as ci } from "./Icons";

import CTMap from "@project/CTMap.png";
import FViewer from "@project/FViewer.png";
import GCalc from "@project/GCalc.png";
import PPSim from "@project/PreyPredSim.png";
import SSearch from "@project/Search.png";
import STracker from "@project/Sleep Tracker.png";
import Sudoku from "@project/Sudoku.png";
import TEditor from "@project/TextEditor.png";

import SSdemo from "@demo/Search.gif";
import CTDemo from "@demo/CTMap.gif";
import SudokuDemo from "@demo/Sudoku.gif";
import PPSimDemo from "@demo/PPSim.gif";
import GCalcDemo from "@demo/GCalc.gif";
import TEditorDemo from "@demo/TEditor.gif";
import FViewerDemo from "@demo/FViewer.gif";

type pType = {
  name: string;
  img: StaticImageData;
  alt: string;
  span?: boolean;
  url?: string;
  icons: Array<Img>;
  demo?: Img;
};

const Projects = {
  CTMap: {
    name: "Clinical Trials Map",
    img: CTMap,
    alt: "Clinical Trials Map App Screenshot",
    span: true,
    url: "https://github.com/rparin/CTMap",
    icons: [ci.react, ci.nodejs, ci.tailwind, ci.ts, ci.html],
    demo: {
      img: CTDemo,
      alt: "Demo of Clinical Trials Map",
    },
  },
  STracker: {
    name: "Sleep Tracker",
    img: STracker,
    alt: "Sleep Tracker App Screenshot",
    span: true,
    url: "https://github.com/rparin/Sleep-Tracker",
    icons: [ci.angular, ci.fbase, ci.ionic, ci.html, ci.css, ci.ts],
  },
  Sudoku: {
    name: "Sudoku",
    img: Sudoku,
    alt: "Sudoku Help Menu Screenshot",
    url: "https://github.com/rparin/Sudoku",
    icons: [ci.python, ci.pygame],
    demo: {
      img: SudokuDemo,
      alt: "Demo of Sudoku game",
    },
  },
  PPSim: {
    name: "Prey Predator Sim",
    img: PPSim,
    alt: "Prey Predator Simulation Screenshot",
    url: undefined,
    icons: [ci.cpp, ci.sfml],
    demo: {
      img: PPSimDemo,
      alt: "Demo of Prey and Predator Sim",
    },
  },
  FViewer: {
    name: "Font Viewer",
    img: FViewer,
    alt: "Font Viewer App Screenshot",
    span: true,
    url: "https://github.com/rparin/Font-Viewer",
    icons: [ci.angular, ci.fbase, ci.tensflow, ci.html, ci.css, ci.ts],
    demo: {
      img: FViewerDemo,
      alt: "Demo of Font Viewer Application",
    },
  },
  GCalc: {
    name: "Graphing Calculator",
    img: GCalc,
    alt: "Graphing Calculator App Screenshot",
    span: true,
    url: "https://github.com/rparin/Graphing-Calculator",
    icons: [ci.cpp, ci.sfml],
    demo: {
      img: GCalcDemo,
      alt: "Demo of Graphing Calc App",
    },
  },
  TEditor: {
    name: "Text Editor",
    img: TEditor,
    alt: "Text Editor Screenshot",
    url: "https://github.com/rparin/JText-Editor",
    icons: [ci.java],
    demo: {
      img: TEditorDemo,
      alt: "Demo of Text Editor App",
    },
  },
  SSearch: {
    name: "Search Engine",
    img: SSearch,
    alt: "Search App Screenshot",
    span: true,
    url: "https://github.com/rparin/StellerSearch",
    icons: [
      ci.python,
      ci.openai,
      ci.flask,
      ci.pandas,
      ci.html,
      ci.css,
      ci.html,
      ci.js,
    ],
    demo: {
      img: SSdemo,
      alt: "Demo of search engine",
    },
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
