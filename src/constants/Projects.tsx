import { Img } from "./Icons";
import { CodeIcons as ci } from "./Icons";

type pType = {
  name: string;
  img: string;
  alt: string;
  span?: boolean;
  url?: string;
  website?: string;
  icons: Array<Img>;
  demo?: {
    img: string;
    alt: string;
  };
};

const Projects = {
  SArtNet: {
    name: "Spotify Artist Network",
    img: "https://raw.githubusercontent.com/rparin/SpotifyArtistNetwork/main/_preview/SpotifyArtistNetwork.webp",
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
      img: "https://raw.githubusercontent.com/rparin/SpotifyArtistNetwork/main/_preview/Demo.gif",
      alt: "Demo of Spotify Artist Network",
    },
  },
  CTMap: {
    name: "Clinical Trials Map",
    img: "https://raw.githubusercontent.com/rparin/CTMap/main/_preview/CTMap.webp",
    alt: "Clinical Trials Map App Screenshot",
    span: true,
    url: "https://github.com/rparin/CTMap",
    icons: [ci.react, ci.nodejs, ci.tailwind, ci.mapbox, ci.ts, ci.html],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/CTMap/main/_preview/Demo.gif",
      alt: "Demo of Clinical Trials Map",
    },
  },
  STracker: {
    name: "Sleep Tracker",
    img: "https://raw.githubusercontent.com/rparin/Sleep-Tracker/main/preview/Sleep%20Tracker.webp",
    alt: "Sleep Tracker App Screenshot",
    span: true,
    url: "https://github.com/rparin/Sleep-Tracker",
    icons: [ci.angular, ci.fbase, ci.ionic, ci.html, ci.css, ci.ts],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/Sleep-Tracker/main/preview/Demo.gif",
      alt: "Demo of Sleep Tracker App",
    },
  },
  Sudoku: {
    name: "Sudoku",
    img: "https://raw.githubusercontent.com/rparin/Sudoku/main/preview/Sudoku.webp",
    alt: "Sudoku Help Menu Screenshot",
    url: "https://github.com/rparin/Sudoku",
    icons: [ci.python, ci.pygame],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/Sudoku/main/preview/Demo.gif",
      alt: "Demo of Sudoku game",
    },
  },
  PPSim: {
    name: "Prey Predator Sim",
    img: "https://raw.githubusercontent.com/rparin/Prey-and-Predator/main/preview/PreyPredSim.webp",
    alt: "Prey Predator Simulation Screenshot",
    url: "https://github.com/rparin/Prey-and-Predator",
    icons: [ci.cpp, ci.sfml],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/Prey-and-Predator/main/preview/Demo.gif",
      alt: "Demo of Prey and Predator Sim",
    },
  },
  FViewer: {
    name: "Font Viewer",
    img: "https://raw.githubusercontent.com/rparin/Font-Viewer/main/preview/FViewer.webp",
    alt: "Font Viewer App Screenshot",
    span: true,
    url: "https://github.com/rparin/Font-Viewer",
    icons: [ci.angular, ci.fbase, ci.tensflow, ci.html, ci.css, ci.ts],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/Font-Viewer/main/preview/demo.gif",
      alt: "Demo of Font Viewer Application",
    },
  },
  GCalc: {
    name: "Graphing Calculator",
    img: "https://raw.githubusercontent.com/rparin/Graphing-Calculator/main/preview/GCalc.webp",
    alt: "Graphing Calculator App Screenshot",
    span: true,
    url: "https://github.com/rparin/Graphing-Calculator",
    icons: [ci.cpp, ci.sfml],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/Graphing-Calculator/main/preview/Demo.gif",
      alt: "Demo of Graphing Calc App",
    },
  },
  TEditor: {
    name: "Text Editor",
    img: "https://raw.githubusercontent.com/rparin/JText-Editor/main/preview/TextEditor.webp",
    alt: "Text Editor Screenshot",
    url: "https://github.com/rparin/JText-Editor",
    icons: [ci.java],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/JText-Editor/main/preview/Demo.gif",
      alt: "Demo of Text Editor App",
    },
  },
  SSearch: {
    name: "Search Engine",
    img: "https://raw.githubusercontent.com/rparin/StellerSearch/main/preview/Search.webp",
    alt: "Search App Screenshot",
    span: true,
    url: "https://github.com/rparin/StellerSearch",
    icons: [ci.python, ci.openai, ci.flask, ci.pandas, ci.html, ci.css, ci.js],
    demo: {
      img: "https://raw.githubusercontent.com/rparin/StellerSearch/main/preview/Demo.gif",
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
