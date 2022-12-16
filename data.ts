import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaDatabase } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>, <b>React.js</b> or <b>Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks like <b>Node.js</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust REST API using <b>Node API</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "Stunning user interface design using <b>Figma</b> ",
  },
  {
    Icon: FaDatabase,
    title: "Database",
    about: "I have work with MongoDB  ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "Happy to debug the error ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "VSCode",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Mongo Compass",
    level: "60",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Pizza Booking",
    description: "This can select particular pizza and order it for you.",
    image_path: "/images/Pizza-BookingApp.png",
    deployed_url: "https://pizza-booking.vercel.app/",
    github_url: "https://github.com/RahulDoshi099/Pizza-Booking.git",
    category: ["Next"],
    key_techs: ["mongo", "axios","Next"],
  },
  {
    id: 2,
    name: "Hotel Booking Admin",
    image_path: "/images/Hotel-BookingAdmin.png",
    deployed_url: "https://booking-app-client-flax.vercel.app",
    github_url: "https://github.com/RahulDoshi099/BookingApp-Admin.git",
    category: ["react"],
    description:
      "Here only Super Admin have access.There is dashboard for manage Hotels,Rooms, and Users.You can manage all the data here.",
    key_techs: ["React", "Node", "mongo","react-redux","context-API"],
  },
  {
    id: 3,
    name: "Hotel Booking Client",
    image_path: "/images/Hotel-BookingClient.PNG",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/RahulDoshi099/BookingApp-Client.git",
    category: ["react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
    ],
  },
  {
    id: 4,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    id: 5,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
  {
    id: 6,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },
];
