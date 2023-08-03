import Image from "next/image";
import gCalc from "../app/assets/Projects/GCalc.png";

export default function PImage() {
  return (
    <div className="relative [&>p]:hover:visible [&>p]:hover:opacity-100">
      <Image
        className="h-60 w-auto object-cover"
        src={gCalc}
        alt="Graphing Calculator Preview"
      />
      <p className="absolute invisible bottom-7 left-7">Graphing Calculator</p>
      <p className="invisible absolute bottom-1 left-1">Description</p>
    </div>
  );
}
