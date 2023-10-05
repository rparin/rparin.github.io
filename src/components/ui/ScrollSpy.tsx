"use client";
import React, { MutableRefObject, useRef, useState, useEffect } from "react";

export default function ScrollSpy({
  navbar,
  children,
}: {
  navbar: React.ReactElement;
  children: React.ReactElement[];
}) {
  const navIndex: any = {};
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sections: React.JSX.Element[] = [];
  const navRefs = useRef<Array<HTMLDivElement>>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

  children.map((child, index) => {
    if (index == 0) {
      navIndex[index] = "";
      sections.push(<div key="__" ref={addToRefs}></div>);
    }

    navIndex[index + 1] = child.props.id;
    sections.push(
      <child.type
        {...child.props}
        key={index + child.props.id}
        ref={addToRefs}
      />
    );
  });

  useEffect(() => {
    const handleScroll = (e: Event) => {
      var index = nearestIndex(
        window.scrollY,
        navRefs.current,
        0,
        navRefs.current.length - 1
      );
      setActiveIndex(index);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nv = React.cloneElement(navbar, { activeId: navIndex[activeIndex] });

  return (
    <>
      {nv}
      {sections}
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
  sectionPositionArray: Array<HTMLDivElement>,
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
      Math.abs(sectionPositionArray[startIndex].offsetTop - currentPosition) <
      Math.abs(sectionPositionArray[endIndex].offsetTop - currentPosition)
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].offsetTop - currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].offsetTop - currentPosition
    );
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
