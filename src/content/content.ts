import type { Education, Experience, Project } from "../components/types/types";
import OmniControlImage from "../../src/assets/omniControl.webp"
import vanillaCalculatorImage from "../../src/assets/vanillaCalculator.webp"
import ChatComponent from "../../src/assets/chatComponent.webp";
import AvocadoShelfLifeImage from "../../src/assets/avocadoAPI.webp";
export const header = {
    name: "Luis Preciado",
    title: "Robotics Engineer",
    description: "I'm a robotics engineer focused on machine learning and front-end development."
}

export const experience: Experience[] = [
    {
        title: "Software Developer Intern",
        description: `
            Software development and automation initiatives, including designing an AI-driven Chatbot (Python, Rasa, SQL) for developer support, automating ECU fault-mapping report generation using Python and data analysis libraries (Pandas, fuzzy logic) to ensure quality, and developing scripts to streamline requirements verification against ECU configurations.
        `,
        startDate: "2023",
        endDate: "2024",
        company: "Bosch",
        location: "Guadalajara, Jalisco",
        url: "https://www.bosch.com"
    },
    {
        title: "Robotics Research Assistant",
        description: `
            Engaged in full-stack robotics R&D, from contributing to multi-robot consensus algorithm development (with ROS, OptiTrack, and Linux) to physical building, programming, and testing of UAVs. Key contributions include VIO implementation for precise indoor UAV navigation and designing PCBs and circuits for key hardware-level sensor synchronization essential for robust robotic perception.
        `,
        startDate: "2022",
        endDate: "2023",
        company: "University of Guadalajara",
        location: "San Francisco, CA",
        url: "https://www.cucei.udg.mx/carreras/robotica/es/laboratorios/ciber-fisicos"
    }
];

export const projects: Project[] = [
    {
        title: "Avocado Shelf-Life Predictor",
        description: "A Deep Learning model that predicts the shelf-life of avocados based on their photographs. Built using TensorFlow and Keras and applying MLOps practices to ensure model accuracy and scalability.",
        url: "https://avocado-ui.lepcodes.com/",
        github: "https://github.com/lepcodes/avocado-ripening",
        image: AvocadoShelfLifeImage,
        tech: ["PYTHON", "TENSORFLOW", "KERAS", "DOCKER", "CLOUD"]

    },
    {
        title: "React Chat Component",
        description: "A production-ready chat component for React and Next.js, published as a distributable NPM package. Designed for easy integration, it features a type-safe API built with TypeScript and encapsulated styling using CSS Modules to prevent conflicts. An implementation of this package is available in this portfolio.",
        url: "https://lep-chat-demo.vercel.app/",
        github: "https://github.com/lepcodes/lep-chat",
        image: ChatComponent,
        tech: ["TYPESCRIPT", "CSS", "REACT", "NEXTJS"]
    },
    {
        title: "Vanilla Calculator",
        description: "Built entirely with vanilla JavaScript, HTML, and CSS, this sleek calculator is a feature-rich tool designed for a great user experience. It includes a live-updating operation history panel, full keyboard support, and a clean, fully responsive design that works seamlessly on any device.",
        url: "https://lepcodes.github.io/vanilla-calculator/",
        github: "https://github.com/lepcodes/vanilla-calculator",
        image: vanillaCalculatorImage,
        tech: ["JAVASCRIPT", "HTML", "CSS"]
    },
    {
        title: "Omni-Control Driver",
        description: "The Omni_Control package is a motion control system designed specifically for the Mecano Omnidirectional robot. Leveraging ROS framework, the system's core intelligence is driven by custom Python nodes that implement a sNPID controller for adaptive movement. Aditionally, the package uses Arduino as an interface between the computer and Sabertooth motor drivers.",
        url: "https://www.youtube.com/watch?v=NT2HuSaO69o",
        github: "https://github.com/lepcodes/omni_control",
        image: OmniControlImage,
        tech: ["PYTHON","CMAKE","SHELL","ROS"]
    },
];

export const education: Education[] = [
    {
        title: "Bachelor of Science in Machine Learning",
        school: "University of Guadalajara",
        startDate: "2024",
        endDate: "Current",
        location: "Guadalajara, Mexico",
        description: "Machine Learning, Data Science, Deep Learning, Computer Vision, and Natural Language Processing. I have experience with Python, TensorFlow, Keras.",
        url: "https://www.udg.mx/es/node/79543"
    },
    {
        title: "Bachelor in Robotics Engineering",
        school: "University of Gudalajara",
        startDate: "2020",
        endDate: "2024",
        location: "Guadalajara, Mexico",
        description: "Comprehensive background in robotics, encompassing AI, machine learning, and vision programming (Python, Matlab), alongside analog/power electronics for system control. I've developed GUIs (Qt, LabVIEW) for interfacing with these systems via I2C/CAN, and possess strong skills in digital electronics, including circuit design and embedded systems programming (C, VHDL).",            
        url: "https://www.cucei.udg.mx/es/oferta-academica/licenciaturas/licenciatura-en-ingenieria-robotica"
    }
];