"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestIndex = (
  currentPosition: any,
  sectionPositionArray: any,
  startIndex: any,
  endIndex: any
): any => {
  if (startIndex === endIndex) return startIndex;
  else if (
    Math.ceil(window.innerHeight + window.scrollY) >=
    document.documentElement.scrollHeight
  ) {
    return endIndex;
  } else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
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

export default function ScrollHighlightNavbar({
  navHeader,
}: {
  navHeader: any;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const handleScroll = (e: any) => {
      var index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length - 1
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 bg-background drop-shadow-lg z-10">
      {navHeader.map((header: any, index: any) => (
        <a
          key={index + header.headerID}
          style={{ backgroundColor: activeIndex === index ? "red" : "green" }}
          href={`#${header.headerID}`}>
          {header.headerTitle}
        </a>
      ))}
    </div>
  );
}

ScrollHighlightNavbar.propTypes = {
  navHeader: PropTypes.arrayOf(
    PropTypes.shape({
      headerID: PropTypes.string,
      headerRef: PropTypes.object.isRequired,
      headerTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};
