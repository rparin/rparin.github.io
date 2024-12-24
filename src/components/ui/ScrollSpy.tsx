"use client";
import React, { useState, useEffect } from "react";
import { Dictionary } from "@/lib/utils";

export default function ScrollSpy({
  navbar,
  children,
}: {
  navbar: React.ReactElement;
  children: React.ReactElement<{ id: string }>[];
}) {
  const navIndex: Dictionary<string> = {};
  const [activeIndex, setActiveIndex] = useState<number>(0);

  children.map((child, index) => {
    navIndex[index] = child.props.id;
  });

  useEffect(() => {
    const offSets = children.map((child, index) => {
      return document.getElementById(child.props.id)!.offsetTop;
    });
    const handleScroll = (e: Event) => {
      var index = nearestIndex(window.scrollY, offSets, 0, offSets.length - 1);
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [children]);

  const nv = React.cloneElement(
    navbar as React.ReactElement<{ activeId?: string }>,
    { activeId: navIndex[activeIndex] }
  );

  return (
    <>
      {nv}
      <main>{children}</main>
    </>
  );
}

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestIndex = (
  currentPosition: number,
  sectionPositionArray: Array<number>,
  startIndex: number,
  endIndex: number
): number => {
  if (startIndex === endIndex) return startIndex;
  else if (
    Math.ceil(window.innerHeight + window.scrollY) >=
    document.documentElement.scrollHeight
  ) {
    return endIndex;
  } else if (startIndex === endIndex - 1) {
    if (
      Math.abs(sectionPositionArray[startIndex] - currentPosition) <
      Math.abs(sectionPositionArray[endIndex] - currentPosition)
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(sectionPositionArray[nextNearest] - currentPosition);
    var b = Math.abs(sectionPositionArray[nextNearest + 1] - currentPosition);
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};
