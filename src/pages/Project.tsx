import Image from "next/image";
import gCalc from "../app/assets/Projects/GCalc.png";
import aTower from "../app/assets/Projects/AttackTowers.jpg";
import preyPred from "../app/assets/Projects/PreyPredSim.png";
import sudoku from "../app/assets/Projects/Help.png";
import tEdit from "../app/assets/Projects/TextEditor.png";
import PImage from "@/components/PImage";

export default function Project() {
  return (
    <section
      id="projects"
      className="before:content-[''] before:h-10 before:block 2xl:before:h-32 flex min-h-screen flex-col">
      <h2 className="text-center">Projects</h2>
      <p className="text-center mb-5">Some things I made, even the art!</p>
      <div className="mx-24">
        <div className="grid grid-cols-4 auto-rows-fr gap-1 place-items-center">
          <PImage />
        </div>
      </div>
    </section>
  );
}
