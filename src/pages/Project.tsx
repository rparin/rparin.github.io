import Image from "next/image";
import gCalc from "../app/assets/Projects/GCalc.png";
import sudoku from "../app/assets/Projects/Help.png";
import ctMap from "../app/assets/Projects/CTMap.png";
import aTower from "../app/assets/Projects/AttackTowers.jpg";
import preyPred from "../app/assets/Projects/PreyPredSim.png";
import tEdit from "../app/assets/Projects/TextEditor.png";
import sTracker from "../app/assets/Projects/Sleep Tracker.png";
import PImage from "@/components/PImage";
import { ST } from "next/dist/shared/lib/utils";

export default function Project() {
  return (
    <section
      id="projects"
      className="before:content-[''] before:h-10 before:block 2xl:before:h-32 flex min-h-screen flex-col">
      <h2 className="text-center">Projects</h2>
      <p className="text-center mb-5">Some things I made, even the art!</p>
      <div className="mx-20">
        <div className="flex flex-wrap gap-1  justify-center place-items-center">
          <PImage
            name="Graphing Calculator"
            alt={"Graph of trig functions in cartesian coordinates"}
            src={gCalc}
            link="https://github.com/rparin/Graphing-Calculator"
            desc="This calculator is capable of graphing in both cartesian
            and polar coordinates. It uses a wide variety of data
            structures to operate such as a queue to graph the
            equations a stack to tokenize the inputs."
          />
          <PImage
            name="Sudoku"
            alt={"Gameplay of Sudoku"}
            src={sudoku}
            link="https://github.com/rparin/Sudoku"
            desc="For this game I used a stack data structure for the
            forward and back buttons and recursion for the board
            creation. The art is done in Photoshop."
          />
          <PImage
            name="Clinical Trials map"
            alt={
              "Map displaying multiple locations where Clinical Trials occured"
            }
            src={ctMap}
            desc="Interactive map that displays clinical trial information from around the world. 
            Users have the ability to explore clinical trial data specific to different regions, such as countries or states."
          />
          <PImage
            name="Sleep Tracker"
            alt={"Multiple phones showcasing sleep tracker app"}
            src={sTracker}
            link="https://github.com/rparin/Sleep-Tracker"
            desc="A a sleep tracker app that allows users to monitor their sleep patterns and track their progress towards better sleep. 
            With this app, users can record their sleep duration, and quality."
          />
          <PImage
            name="JText Editor"
            alt={"Text Editor Program made in Java showing Hello World"}
            src={tEdit}
            link="https://github.com/rparin/JText-Editor"
            desc="A simple text editor. It uses a stack data structure
            to undo and redo the user's input. The user can select
            a font, change the font size and style."
          />
          <PImage
            name="Prey and Predator"
            alt={"Prey and Predator Simulation"}
            src={preyPred}
            desc="Game where user can enter the amount of prey and
            predators and watch how long the predators will take
            to eat all the prey. Game uses inheritance as the
            basis as both prey and predators move similarly."
          />
          <PImage
            name="Attack the Towers"
            alt={"Tower Defense Game Menu Screen"}
            src={aTower}
            link="https://devpost.com/software/unity-game-attack-the-towers?ref_content=my-projects-tab&ref_feature=my_projects"
            desc="A tower defense game I made in unity with my friends.
            Art models obtained from the Unity Asset store. In
            this game I designed the layout of the map and coded
            how some of the units would move."
          />
        </div>
      </div>
    </section>
  );
}
