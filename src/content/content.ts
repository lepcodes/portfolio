import type { Education, Experience, Project } from "../components/types/types";
import OmniControlImage from "../../src/assets/omniControl.webp"

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
        title: "Omni-Control Driver",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Voluptate cupidatat labore id et in ex sit. Anim ullamco labore mollit commodo veniam culpa. Ea irure id sit enim ea labore in id laborum ullamco labore consectetur mollit. Ea commodo tempor dolor nostrud cupidatat veniam mollit eiusmod mollit.",
        url: "https://github.com/lepcodes",
        github: "https://github.com/lepcodes/omni_control",
        image: OmniControlImage,
        tech: ["ROS","SHELL","PYTHON","CMAKE"]
    },
    {
        title: "IBVS Tello Driver",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Voluptate cupidatat labore id et in ex sit. Anim ullamco labore mollit commodo veniam culpa. Ea irure id sit enim ea labore in id laborum ullamco labore consectetur mollit. Ea commodo tempor dolor nostrud cupidatat veniam mollit eiusmod mollit.",
        url: "https://www.google.com",
        github: "https://github.com/lepcodes",
        image: OmniControlImage,
        tech: ["PYTHON", "JAVASCRIPT", "HTML"]
    },
    {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia. Voluptate cupidatat labore id et in ex sit. Anim ullamco labore mollit commodo veniam culpa. Ea irure id sit enim ea labore in id laborum ullamco labore consectetur mollit. Ea commodo tempor dolor nostrud cupidatat veniam mollit eiusmod mollit.",        
        url: "https://www.google.com",
        github: "https://github.com/lepcodes",
        image: OmniControlImage,
        tech: ["PYTHON", "JAVASCRIPT", "HTML"]
    }
];

export const education: Education[] = [
    {
        title: "Bachelor of Science in Machine Learning",
        school: "University of Guadalajara",
        startDate: "2024",
        endDate: "Current",
        location: "Guadalajara, Mexico",
        description: "            ",
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