import { useRef } from "react";

export const nv = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const navHeader = [
    {
      headerTitle: "Section 1",
      headerRef: section1Ref,
      headerID: "section1",
    },
    {
      headerTitle: "Section 2",
      headerRef: section2Ref,
      headerID: "section2",
    },
    {
      headerTitle: "Section 3",
      headerRef: section3Ref,
      headerID: "section3",
    },
    {
      headerTitle: "Section 4",
      headerRef: section4Ref,
      headerID: "section4",
    },
  ];

  return navHeader;
};
