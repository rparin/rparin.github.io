import { StaticImageData } from "next/image";
import git from "@icons/Github.svg";
import linked from "@icons/LinkedIn.svg";
import gmail from "@icons/GMail.svg";
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
import zod from "@icons/Zod.svg";
import springboot from "@icons/SpringBoot.svg";
import docker from "@icons/Docker.svg";

type Icon = {
  name: string;
  img: StaticImageData;
  alt: string;
  invert?: boolean;
  url?: string;
};

const SocialIcons = {
  github: {
    name: "Github",
    img: git,
    alt: "logo of Github",
  },
  linkedin: {
    name: "LinkedIn",
    img: linked,
    alt: "logo of LinkedIn",
  },
  gmail: {
    name: "Gmail",
    img: gmail,
    alt: "logo of Gmail",
  },
};

const DevTools = {
  angular: {
    name: "Angular",
    img: angular,
    alt: "logo of angular",
    url: "https://angular.io/",
  },
  react: {
    name: "React",
    img: react,
    alt: "logo of react",
    url: "https://react.dev/",
  },
  nextjs: {
    name: "Nextjs",
    img: nextjs,
    alt: "logo of nextjs",
    url: "https://nextjs.org/",
  },
  springboot: {
    name: "Spring Boot",
    img: springboot,
    alt: "logo of Spring Boot",
    url: "https://spring.io/projects/spring-boot",
  },
  reactquery: {
    name: "Tanstack Query",
    img: reactquery,
    alt: "logo of reactquery",
    url: "https://tanstack.com/query/latest",
  },
  zod: {
    name: "Zod",
    img: zod,
    alt: "logo of zod",
    url: "https://zod.dev",
  },
  docker: {
    name: "Docker",
    img: docker,
    alt: "logo of Docker",
    url: "https://www.docker.com",
  },
  mapbox: {
    name: "Mapbox",
    img: mapbox,
    alt: "logo of mapbox",
    url: "https://www.mapbox.com/",
  },
  ionic: {
    name: "Ionic",
    img: ionic,
    alt: "logo of ionic",
    url: "https://ionicframework.com/",
  },
  tailwind: {
    name: "Tailwind",
    img: tailwind,
    alt: "logo of tailwind",
    url: "https://tailwindcss.com/",
  },
  fbase: {
    name: "Firebase",
    img: fbase,
    alt: "logo of firebase",
    url: "https://firebase.google.com/",
  },
  nodejs: {
    name: "Nodejs",
    img: nodejs,
    alt: "logo of nodejs",
    url: "https://nodejs.org/en",
  },
  cpp: {
    name: "C++",
    img: cpp,
    alt: "logo of c++",
    url: "https://isocpp.org/",
  },
  css: {
    name: "CSS",
    img: css,
    alt: "logo of css",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  js: {
    name: "Javascript",
    img: js,
    alt: "logo of javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  html: {
    name: "HTML",
    img: html,
    alt: "logo of html",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  ts: {
    name: "Typescript",
    img: ts,
    alt: "logo of typescript",
    url: "https://www.typescriptlang.org/",
  },
  python: {
    name: "Python",
    img: python,
    alt: "logo of python programming language",
    url: "https://www.python.org/",
  },
  java: {
    name: "Java",
    img: java,
    alt: "logo of java",
    url: "https://www.java.com/en/download/help/whatis_java.html",
  },
  pygame: {
    name: "Pygame",
    img: pygame,
    alt: "logo of pygame library",
    url: "https://www.pygame.org/",
  },
  sfml: {
    name: "SFML",
    img: sfml,
    alt: "logo of SFML library",
    url: "https://www.sfml-dev.org/",
  },
  tensflow: {
    name: "Tensorflow",
    img: tensflow,
    alt: "logo of tensorflow",
    url: "https://www.tensorflow.org/",
  },
  pandas: {
    name: "Pandas",
    img: pandas,
    alt: "logo of pandas library",
    url: "https://pandas.pydata.org/",
  },
  flask: {
    name: "Flask",
    img: flask,
    alt: "logo of flask framework",
    url: "https://flask.palletsprojects.com/en/3.0.x/",
  },
  openai: {
    name: "OpenAi",
    img: openai,
    alt: "logo of openai",
    url: "https://openai.com/",
  },
};

export { DevTools, SocialIcons };
export type { Icon };
