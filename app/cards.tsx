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

export interface CardProps {
  href: string;
  icon: any;
  imageAlt: string;
  imageSrc: string;
  text: string;
  text2?: string;
  title: string;
}

export const experienceCards: CardProps[] = [
  {
    href: "https://www.willbert.tech",
    icon: <PlugZap size={50} />,
    imageAlt: "Logo of WILLBERT by Euroloop",
    imageSrc: "/willbert-logo.png",
    text: "E-Mobility",
    text2: "Backed software developer",
    title: "WILLBERT by Euroloop",
  },
  {
    href: "https://www.f5.com",
    icon: <EarthLock size={50} />,
    imageAlt: "Logo of F5 networks",
    imageSrc: "/f5-logo-rgb.png",
    text: "Cloud security",
    text2: "Software Engineer II",
    title: "F5 networks",
  },
  {
    href: "https://www.motorolasolutions.com",
    icon: <RadioTower size={50} />,
    imageAlt: "Logo of Motorola Solutions",
    imageSrc: "/motorola-logo.png",
    text: "Mission Critical technology",
    text2: "Software Developer",
    title: "Motorola Solutions",
  },
];

export const educationCards: CardProps[] = [
  {
    href: "https://www.uj.edu.pl/",
    icon: <GraduationCap size={50} />,
    imageAlt: "Logo of the Jagiellonian University",
    imageSrc: "/uj-logo.png",
    text: "Applied Computer Science",
    text2: "Master",
    title: "Jagiellonian University",
  },
  {
    href: "https://www.agh.edu.pl/",
    icon: <BookMarked size={50} />,
    imageAlt: "Logo of AGH University of Cracow",
    imageSrc: "/agh-logo.png",
    text: "Electronics and Telecom",
    text2: "Engineer",
    title: "AGH University",
  },
];

export const projectCards: CardProps[] = [
  {
    href: "http://67.207.78.202:5001",
    icon: <SlidersHorizontal size={50} />,
    imageAlt: "Logo of Goofy Slider",
    imageSrc: "/goofy-slider-logo.png",
    text: "A simple game challange",
    text2: "Express.js",
    title: "Goofy Slider",
  },
  {
    href: "http://67.207.78.202:5004",
    icon: <ImagePlus size={50} />,
    imageAlt: "Logo of AI Image Generator",
    imageSrc: "/ai-image-generator-logo.png",
    text: "Possible thanks to Dall-e",
    text2: "Express.js",
    title: "AI Image Generator",
  },
  {
    href: "http://67.207.78.202:5000",
    icon: <Grid3X3 size={50} />,
    imageAlt: "Logo of Tic Tac Toe",
    imageSrc: "/tic-tac-toe-logo.png",
    text: "With move history",
    text2: "React.js, Python (Flask)",
    title: "Tic Tac Toe",
  },
  {
    href: "http://67.207.78.202:5173",
    icon: <MessagesSquare size={50} />,
    imageAlt: "Logo of Chatter",
    imageSrc: "/chatter-logo.png",
    text: "ChatGPT-powered chatbot",
    text2: "React.js, Python (FastAPI + Flask)",
    title: "Chatter",
  },
  {
    href: "http://67.207.78.202",
    icon: <CircleHelp size={50} />,
    imageAlt: "Logo of Cursum",
    imageSrc: "/cursum-logo.png",
    text: "A minimal quizz web app",
    text2: "React.js, Nginx",
    title: "Cursum",
  },
];
