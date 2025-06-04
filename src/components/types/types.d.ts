import type { TechnologyType } from "./tech_types";

export interface Experience {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  company: string;
  location: string;
  url: string;
}

export interface Education {
  title: string;
  school: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  url: string;
  github: string;
  image: string;
  tech: TechnologyType[];
}

export interface Contact {
  name: string;
  url: string;
  clipboard: string;
}