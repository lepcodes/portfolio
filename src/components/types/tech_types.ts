import { FaPython, FaJsSquare, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiFastapi, SiCmake, SiNextdotjs, SiTensorflow, SiKeras, SiDocker, SiIcloud } from 'react-icons/si';
import { TbBrandPowershell } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import ROSIcon from "../../icons/ROSIcon.astro";

export const Technology = {
    PYTHON: {
      name: "Python",
      color: ["#4693d4", "#4693d4"],
      icon: FaPython
    },
    JAVASCRIPT: {
      name: "JavaScript",
      color: ["#F7DF1E", "#c7b212"],
      icon: FaJsSquare
    },
    TYPESCRIPT: {
      name: "TypeScript",
      color: ["#3178C6", "#3178C6"],
      icon: BiLogoTypescript
    },
    REACT: {
      name: "React",
      color: ["#61DAFB", "#3196b1"],
      icon: FaReact
    },
    HTML: {
      name: "HTML",
      color: ["#E44D26", "#E44D26"],
      icon: FaHtml5
    },
    CSS: {
      name: "CSS",
      color: ["#8c6eba", "#8c6eba"],
      icon: FaCss3
    },
    FASTAPI: {
      name: "FastAPI",
      color: ["#009688", "#009688"],
      icon: SiFastapi
    },
    ROS: {
      name: "ROS",
      color: ["#9353C1", "#9353C1"],
      icon: ROSIcon
    },
    SHELL: {
      name: "Shell Script",
      color: ["#009688", "#009688"],
      icon: TbBrandPowershell
    },
    CMAKE: {
      name: "CMake",
      color: ["#C73C43", "#C73C43"],
      icon: SiCmake
    },
    NEXTJS: {
      name: "Next.js",
      color: ["#ffffff", "#000000"],
      icon: SiNextdotjs
    },
    TENSORFLOW: {
      name: "TensorFlow",
      color: ["#FF6F00", "#FF6F00"],
      icon: SiTensorflow
    },
    KERAS: {
      name: "Keras",
      color: ["#D00000", "#D00000"],
      icon: SiKeras
    },
    DOCKER: {
      name: "Docker",
      color: ["#4693d4", "#4693d4"],
      icon: SiDocker
    },
    CLOUD: {
      name: "Cloud",
      color: ["#009688", "#009688"],
      icon: SiIcloud
    }
  }
  
  export type TechnologyType = keyof typeof Technology;