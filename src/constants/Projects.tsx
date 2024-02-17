import { StaticImageData } from "next/image";
import { Img } from "./Icons";
import { CodeIcons as ci } from "./Icons";

import SArtNet from "@project/SpotifyArtistNetwork.webp";
import CTMap from "@project/CTMap.webp";
import FViewer from "@project/FViewer.webp";
import GCalc from "@project/GCalc.webp";
import PPSim from "@project/PreyPredSim.webp";
import SSearch from "@project/Search.webp";
import STracker from "@project/Sleep Tracker.webp";
import Sudoku from "@project/Sudoku.webp";
import TEditor from "@project/TextEditor.webp";

import SArtNetDemo from "@demo/SpotifyArtistNetwork.gif";
import SSdemo from "@demo/Search.gif";
import CTDemo from "@demo/CTMap.gif";
import SudokuDemo from "@demo/Sudoku.gif";
import PPSimDemo from "@demo/PPSim.gif";
import GCalcDemo from "@demo/GCalc.gif";
import TEditorDemo from "@demo/TEditor.gif";
import FViewerDemo from "@demo/FViewer.gif";
import STDemo from "@demo/STracker.gif";

type pType = {
  name: string;
  img: StaticImageData;
  alt: string;
  span?: boolean;
  url?: string;
  website?: string;
  icons: Array<Img>;
  demo?: Img;
};

const Projects = {
  SArtNet: {
    name: "Spotify Artist Network",
    img: SArtNet,
    alt: "Spotify Artist Network Landing page screenshot",
    span: true,
    url: "https://github.com/rparin/SpotifyArtistNetwork",
    website: "https://spotify-artist-network.vercel.app",
    icons: [
      ci.react,
      ci.nodejs,
      ci.nextjs,
      ci.reactquery,
      ci.tailwind,
      ci.ts,
      ci.html,
    ],
    demo: {
      img: SArtNetDemo,
      alt: "Demo of Spotify Artist Network",
    },
  },
  CTMap: {
    name: "Clinical Trials Map",
    img: CTMap,
    alt: "Clinical Trials Map App Screenshot",
    span: true,
    url: "https://github.com/rparin/CTMap",
    icons: [ci.react, ci.nodejs, ci.tailwind, ci.mapbox, ci.ts, ci.html],
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
    demo: {
      img: STDemo,
      alt: "Demo of Sleep Tracker App",
    },
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
    url: "https://github.com/rparin/Prey-and-Predator",
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
    icons: [ci.python, ci.openai, ci.flask, ci.pandas, ci.html, ci.css, ci.js],
    demo: {
      img: SSdemo,
      alt: "Demo of search engine",
    },
  },
};

// Items will be displayed based on array order
const ProjectItems: Array<pType> = [
  Projects.SArtNet,
  Projects.CTMap,
  Projects.Sudoku,
  Projects.PPSim,
  Projects.SSearch,
  Projects.STracker,
  Projects.GCalc,
  Projects.FViewer,
  Projects.TEditor,
];

export { Projects, ProjectItems };
export type { pType };
