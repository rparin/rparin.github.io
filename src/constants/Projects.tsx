import CTMap from "@project/CTMap.png";
import FViewer from "@project/FViewer.png";
import GCalc from "@project/GCalc.png";
import PPSim from "@project/PreyPredSim.png";
import SSearch from "@project/Search.png";
import STrackerM from "@project/Sleep Tracker M.png";
import STracker from "@project/Sleep Tracker.png";
import Sudoku from "@project/Sudoku.png";
import TEditor from "@project/TextEditor.png";

const ProjectImages = {
  CTMap: {
    img: CTMap,
    alt: "Clinical Trials Map App Screenshot",
    span: true,
    url: "https://github.com/rparin/CTMap",
  },
  STracker: {
    img: STracker,
    imgM: STrackerM,
    alt: "Sleep Tracker App Screenshot",
    span: true,
    url: "https://github.com/rparin/Sleep-Tracker",
  },
  Sudoku: {
    img: Sudoku,
    alt: "Sudoku Help Menu Screenshot",
    span: false,
    url: "https://github.com/rparin/Sudoku",
  },
  PPSim: {
    img: PPSim,
    alt: "Prey Predator Simulation Screenshot",
    span: false,
    url: undefined,
  },
  FViewer: {
    img: FViewer,
    alt: "Font Viewer App Screenshot",
    span: true,
    url: "https://github.com/rparin/Font-Viewer",
  },
  GCalc: {
    img: GCalc,
    alt: "Graphing Calculator App Screenshot",
    span: true,
    url: "https://github.com/rparin/Graphing-Calculator",
  },
  TEditor: {
    img: TEditor,
    alt: "Text Editor Screenshot",
    span: false,
    url: "https://github.com/rparin/JText-Editor",
  },
  SSearch: {
    img: SSearch,
    alt: "Search App Screenshot",
    span: true,
    url: "https://github.com/rparin/StellerSearch",
  },
};

const ProjectItems = [
  ProjectImages.CTMap,
  ProjectImages.STracker,
  ProjectImages.Sudoku,
  ProjectImages.PPSim,
  ProjectImages.SSearch,
  ProjectImages.GCalc,
  ProjectImages.FViewer,
  ProjectImages.TEditor,
];

export { ProjectImages, ProjectItems };
