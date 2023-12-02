import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Weather_Web_AppImg from "@/public/Weather_Web_App.png";
import dzFoodImg from "@/public/Dz_food.png";
import Text_EditorImg from "@/public/Text_Editor.png";
import CalendarImg from "@/public/Calendar.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "font-end Developer",
    location: "Houston, TX",
    description:
      "I'm now a font-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dz Food",
    description:
      'I working as a font-end developer on this project for 1 years. Users can give public feedback to companies.',
    tags: ["HTML", "CSS", "React", "Logical Coding", "JS Functions"],
    imageUrl: dzFoodImg,
    url: "https://ubaidullahcalendar.netlify.app/"
  },
  {
    title: "Shaduler Calendar",
    description:
      'I Developed a calendar component I created this calendar from scratch and continually improved its capabilities during my spare time.',
    tags: ["HTML", "CSS", "React", "Logical Coding", "JS Functions"],
    imageUrl: CalendarImg,
    url: "https://ubaidullahcalendar.netlify.app/"
  },
  {
    title: "Text Editor",
    description:
      "I designed and implemented a custom text editor, incorporating a wide range of features and functionalities to enhance the user experience.",
    tags: ["HTML", "CSS", "React", "Logical Coding", "Js Functions"],
    imageUrl: Text_EditorImg,
    url: "https://ubaidullahtexteditor.netlify.app/"
  },
  {
    title: "Weather Web App",
    description:
      "I created this Weather Web App. Within this project, users can search for weather information for any city or country, expanding my proficiency in handling API data.",
    tags: ["HTML", "CSS", "React", "Logical Coding", "API Integreation"],
    imageUrl: Weather_Web_AppImg,
    url: "https://ubaidullahweather.netlify.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "Meaturial UI",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "MongoDB",
  "Redux Toolkit",
  "GraphQL",
  "Express",
  "PostgreSQL",
] as const;
