// import aghLogo from "@/public/agh-logo.png";
// import generatorLogo from "@/public/ai-image-generator-logo.png";
// import chatterLogo from "@/public/chatter-logo.png";
// import cursumLogo from "@/public/cursum-logo.png";
// import f5Logo from "@/public/f5-logo-rgb.png";
// import goofyLogo from "@/public/goofy-slider-logo.png";
// import motorolaLogo from "@/public/motorola-logo.png";
// import tictactoeLogo from "@/public/tic-tac-toe-logo.png";
// import ujLogo from "@/public/uj-logo.png";
// import willbertLogo from "@/public/willbert-logo.png";
import {
  BookMarked,
  CircleHelp,
  EarthLock,
  GraduationCap,
  Grid3X3,
  ImagePlus,
  MessagesSquare,
  PlugZap,
  RadioTower,
  SlidersHorizontal,
} from "lucide-react";
import { StaticImageData } from "next/image";

export interface CardProps {
  href: string;
  icon: any;
  imageAlt: string;
  imageSrc: string | StaticImageData;
  text: string;
  text2?: string;
  title: string;
}

export const publicPrefix =
  process.env.NODE_ENV === "development" ? "@/public" : "";

export const experienceCards: CardProps[] = [
  {
    href: "https://www.willbert.tech",
    icon: <PlugZap size={"5dvh"} />,
    imageAlt: "Logo of WILLBERT by Euroloop",
    imageSrc: `${publicPrefix}/willbert-logo.png`,
    // imageSrc: willbertLogo || `${imagePrefix}/willbert-logo.png`,
    text: "E-Mobility",
    text2: "Backend software developer",
    title: "WILLBERT by Euroloop",
  },
  {
    href: "https://www.f5.com",
    icon: <EarthLock size={"5dvh"} />,
    imageAlt: "Logo of F5 networks",
    imageSrc: `${publicPrefix}/f5-logo-rgb.png`,
    // imageSrc: f5Logo || `${imagePrefix}/f5-logo-rgb.png`,
    text: "Cloud security",
    text2: "Software Engineer II",
    title: "F5 networks",
  },
  {
    href: "https://www.motorolasolutions.com",
    icon: <RadioTower size={"5dvh"} />,
    imageAlt: "Logo of Motorola Solutions",
    imageSrc: `${publicPrefix}/motorola-logo.png`,
    // imageSrc: motorolaLogo || `${imagePrefix}/motorola-logo.png`,
    text: "Mission Critical technology",
    text2: "Software Developer",
    title: "Motorola Solutions",
  },
];

export const educationCards: CardProps[] = [
  {
    href: "https://www.uj.edu.pl/",
    icon: <GraduationCap size={"5dvh"} />,
    imageAlt: "Logo of the Jagiellonian University",
    imageSrc: `${publicPrefix}/uj-logo.png`,
    // imageSrc: ujLogo || `${imagePrefix}/uj-logo.png`,
    text: "Applied Computer Science",
    text2: "Master",
    title: "Jagiellonian University",
  },
  {
    href: "https://www.agh.edu.pl/",
    icon: <BookMarked size={"5dvh"} />,
    imageAlt: "Logo of AGH University of Cracow",
    imageSrc: `${publicPrefix}/agh-logo.png`,
    // imageSrc: aghLogo || `${imagePrefix}/agh-logo.png`,
    text: "Electronics and Telecom",
    text2: "Engineer",
    title: "AGH University",
  },
];

export const projectCards: CardProps[] = [
  {
    href: "http://ec2-18-153-66-134.eu-central-1.compute.amazonaws.com:5001",
    icon: <SlidersHorizontal size={"5dvh"} />,
    imageAlt: "Logo of Goofy Slider",
    imageSrc: `${publicPrefix}/goofy-slider-logo.png`,
    // imageSrc: goofyLogo || `${imagePrefix}/goofy-slider-logo.png`,
    text: "A simple game challenge",
    text2: "Express.js",
    title: "Goofy Slider",
  },
  {
    href: "http://ec2-18-153-66-134.eu-central-1.compute.amazonaws.com:5004",
    icon: <ImagePlus size={"5dvh"} />,
    imageAlt: "Logo of AI Image Generator",
    imageSrc: `${publicPrefix}/ai-image-generator-logo.png`,
    // imageSrc: generatorLogo || `${imagePrefix}/ai-image-generator-logo.png`,
    text: "Possible thanks to Dall-e",
    text2: "Express.js",
    title: "AI Image Generator",
  },
  {
    href: "http://ec2-18-153-66-134.eu-central-1.compute.amazonaws.com:5000",
    icon: <Grid3X3 size={"5dvh"} />,
    imageAlt: "Logo of Tic Tac Toe",
    imageSrc: `${publicPrefix}/tic-tac-toe-logo.png`,
    // imageSrc: tictactoeLogo || `${imagePrefix}/tic-tac-toe-logo.png`,
    text: "With move history",
    text2: "React.js, Python (Flask)",
    title: "Tic Tac Toe",
  },
  {
    href: "http://ec2-18-153-66-134.eu-central-1.compute.amazonaws.com:5173",
    icon: <MessagesSquare size={"5dvh"} />,
    imageAlt: "Logo of Chatter",
    imageSrc: `${publicPrefix}/chatter-logo.png`,
    // imageSrc: chatterLogo || `${imagePrefix}/chatter-logo.png`,
    text: "ChatGPT-powered chatbot",
    text2: "React.js, Python (FastAPI + Flask)",
    title: "Chatter",
  },
  {
    href: "http://ec2-18-153-66-134.eu-central-1.compute.amazonaws.com",
    icon: <CircleHelp size={"5dvh"} />,
    imageAlt: "Logo of Cursum",
    imageSrc: `${publicPrefix}/cursum-logo.png`,
    // imageSrc: cursumLogo || `${imagePrefix}/cursum-logo.png`,
    text: "A quizz web app",
    text2: "React.js, Nginx",
    title: "Cursum",
  },
  {
    href: "http://ec2-18-153-66-134.eu-central-1.compute.amazonaws.com:8000",
    icon: <CircleHelp size={"5dvh"} />,
    imageAlt: "Logo of Todo",
    imageSrc: `${publicPrefix}/todo-logo.png`,
    // imageSrc: cursumLogo || `${imagePrefix}/cursum-logo.png`,
    text: "A simple TODO list",
    text2: "HTMX, FastAPI",
    title: "TODO",
 },
];
