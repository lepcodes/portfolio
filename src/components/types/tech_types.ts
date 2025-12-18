import { FaPython, FaJsSquare, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiFastapi, SiCmake, SiNextdotjs, SiTensorflow, SiKeras, SiDocker, SiOracle, SiMlflow, SiPrefect, SiGithubactions } from 'react-icons/si';
import { TbBrandPowershell } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoInfiniteSharp } from "react-icons/io5";
import ROSIcon from "../../icons/ROSIcon.astro";

export const Technology = {
    PYTHON: {
      name: "Python",
      color: ["#3775a9", "#3775a9"],
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
      color: ["#1d63ed", "#1d63ed"],
      icon: SiDocker
    },
    OCI: {
      name: "OCI (Cloud)",
      color: ["#c74634", "#c74634"],
      icon: SiOracle
    },
    CICD: {
      name: "CI/CD",
      color: ["#009688", "#009688"],
      icon: IoInfiniteSharp
    },
    GITHUB_ACTIONS: {
      name: "GitHub Actions",
      color: ["#b5038b", "#b5038b"],
      icon: SiGithubactions
    },
    MLFLOW: {
      name: "MLFlow",
      color: ["#49cbee", "#49cbee"],
      icon: SiMlflow
    },
    PREFECT: {
      name: "Prefect",
      color: ["#ffffff", "#000000"  ],
      icon: SiPrefect
    },
  }
  
  export type TechnologyType = keyof typeof Technology;