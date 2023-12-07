import { StaticImageData } from "next/image";
import git from "@icons/Github.svg";
import linked from "@icons/LinkedIn.svg";
import gmail from "@icons/GMail.svg";
import download from "@icons/Download.svg";
import cpp from "@icons/Cpp.svg";
import css from "@icons/CSS.svg";
import js from "@icons/JS.svg";
import html from "@icons/HTML.svg";
import java from "@icons/Java.svg";
import ts from "@icons/TS.svg";
import angular from "@icons/Angular.svg";
import react from "@icons/React.svg";
import nodejs from "@icons/NodeJs.svg";
import fbase from "@icons/Firebase.svg";
import python from "@icons/Python.svg";
import ionic from "@icons/Ionic.svg";
import tailwind from "@icons/Tailwind.svg";
import pygame from "@icons/pygame.svg";
import sfml from "@icons/SFML.svg";
import openai from "@icons/OpenAi.svg";
import pandas from "@icons/Pandas.svg";
import flask from "@icons/Flask.svg";
import tensflow from "@icons/Tensorflow.svg";
import mapbox from "@icons/mapbox.svg";
import nextjs from "@icons/nextjs.svg";
import reactquery from "@icons/reactquery.svg";

type Img = {
  img: StaticImageData;
  alt: string;
  invert?: boolean;
};

const MiscIcons = {
  download: {
    img: download,
    alt: "download icon",
  },
};

const SocialIcons = {
  github: {
    img: git,
    alt: "logo of Github",
  },
  linkedin: {
    img: linked,
    alt: "logo of LinkedIn",
  },
  gmail: {
    img: gmail,
    alt: "logo of Gmail",
  },
};

const CodeIcons = {
  angular: {
    img: angular,
    alt: "logo of angular",
  },
  react: {
    img: react,
    alt: "logo of react",
  },
  nextjs: {
    img: nextjs,
    alt: "logo of nextjs",
  },
  reactquery: {
    img: reactquery,
    alt: "logo of reactquery",
  },
  mapbox: {
    img: mapbox,
    alt: "logo of mapbox",
  },
  ionic: {
    img: ionic,
    alt: "logo of ionic",
  },
  tailwind: {
    img: tailwind,
    alt: "logo of tailwind",
  },
  fbase: {
    img: fbase,
    alt: "logo of firebase",
  },
  nodejs: {
    img: nodejs,
    alt: "logo of nodejs",
  },
  cpp: {
    img: cpp,
    alt: "logo of c++",
  },
  css: {
    img: css,
    alt: "logo of css",
  },
  js: {
    img: js,
    alt: "logo of javascript",
  },
  html: {
    img: html,
    alt: "logo of html",
  },
  ts: {
    img: ts,
    alt: "logo of typescript",
  },
  python: {
    img: python,
    alt: "logo of python programming language",
  },
  java: {
    img: java,
    alt: "logo of java",
  },
  pygame: {
    img: pygame,
    alt: "logo of pygame library",
  },
  sfml: {
    img: sfml,
    alt: "logo of SFML library",
  },
  tensflow: {
    img: tensflow,
    alt: "logo of tensorflow",
  },
  pandas: {
    img: pandas,
    alt: "logo of pandas library",
  },
  flask: {
    img: flask,
    alt: "logo of flask framework",
  },
  openai: {
    img: openai,
    alt: "logo of openai",
    invert: true,
  },
};

export { MiscIcons, CodeIcons, SocialIcons };
export type { Img };
