import { FaPython, FaJsSquare, FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiFastapi } from 'react-icons/si';

export const Technology = {
    PYTHON: {
      name: "Python",
      color: "#4693d4",
      icon: FaPython
    },
    JAVASCRIPT: {
      name: "JavaScript",
      color: "#F7DF1E",
      icon: FaJsSquare
    },
    REACT: {
      name: "React",
      color: "#61DAFB",
      icon: FaReact
    },
    HTML: {
      name: "HTML",
      color: "#E44D26",
      icon: FaHtml5
    },
    CSS: {
      name: "CSS",
      color: "#8c6eba",
      icon: FaCss3
    },
    FASTAPI: {
      name: "FastAPI",
      color: "#009688",
      icon: SiFastapi
    }
  }
  
  export type TechnologyType = keyof typeof Technology;