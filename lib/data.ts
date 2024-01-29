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
    title: "Front-End Internship",
    location: "RYK, Punjab",
    description:
      "I completed my 6-month Internship in Void Soft Technology. I also upskilled my front-end skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Font-end Developer",
    location: "RYK, Punjab",
    description:
      "I'm now a front-end developer working on Danzee Tech. My stack includes React, JavaScript, Material UI and Redux Toolkit. ",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dz Food",
    description:
      'I working as a front-end developer on this project for 1.5+ years. Users can give public feedback to companies.',
    tags: ["HTML/CSS", "JavaScript", "React", "I18Next", "Quick-Pay", "API Integration", "Custome Components", "Custom Hooks"],
    imageUrl: dzFoodImg,
    url: "https://www.dzfood.danzeetech.com/"
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
      "I designed and implemented a custom text editor, incorporating a wide range of features and functionalities to improve my logical coding skill.",
    tags: ["HTML", "CSS", "React", "Logical Coding", "Js Functions"],
    imageUrl: Text_EditorImg,
    url: "https://ubaidullahtexteditor.netlify.app/"
  },
  {
    title: "Weather Web App",
    description:
      "I created this Weather Web App. Within this project, users can search for weather information for any city or country, expanding my proficiency in handling API data.",
    tags: ["HTML", "CSS", "React", "Logical Coding", "API Integration"],
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
  "React",
  "Redux Toolkit",
  "I18Next",
  "Node.js",
  "Express",
  "Git",
  "Github (GitLab)",
] as const;
