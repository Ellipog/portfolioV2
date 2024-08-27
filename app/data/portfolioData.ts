import { LucideIcon } from "lucide-react";

export interface Developer {
  name: string;
  title: string;
  descriptionKey: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: number;
  nameKey: string;
  descriptionKey: string;
  tech: string[];
}

export interface SkillList {
  name: string;
  projects: number;
}

export interface Skill {
  name: string;
  projects: number;
}

export interface SkillInfo {
  titleKey: string;
  link: string;
  icon: string;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export const developer: Developer = {
  name: "Elliot Strand Aaen",
  title: "Full Stack Developer",
  descriptionKey: "developer.description",
  email: "john.doe@example.com",
  github: "github.com/johndoe",
  linkedin: "linkedin.com/in/johndoe",
};

export const projects: Project[] = [
  {
    id: 1,
    nameKey: "projectsList[0].name",
    descriptionKey: "projectsList.0.description",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    nameKey: "projectsList[1].name",
    descriptionKey: "projectsList.1.description",
    tech: ["React", "OpenWeatherAPI"],
  },
  {
    id: 3,
    nameKey: "projectsList[2].name",
    descriptionKey: "projectsList.2.description",
    tech: ["Vue.js", "Firebase"],
  },
];

export const skills: Skill[] = [
  { name: "TypeScript", projects: 15 },
  { name: "NextJS", projects: 12 },
  { name: "React", projects: 5 },
  { name: "NodeJS", projects: 10 },
  { name: "Python", projects: 8 },
  { name: "SQL", projects: 7 },
];

export const typeScriptSkillInfo: SkillInfo[] = [
  {
    titleKey: "skillInfo.TypeScript.0.title",
    link: "https://www.typescriptlang.org/",
    icon: "Docs",
  },
  {
    titleKey: "skillInfo.TypeScript.1.title",
    link: "https://github.com/Ellipog",
    icon: "Trophy",
  },
  {
    titleKey: "skillInfo.TypeScript.2.title",
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
  {
    titleKey: "skillInfo.TypeScript.3.title",
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    name: "Code Explorer",
    description: "Viewed all sections",
    icon: "Trophy",
  },
  {
    id: 2,
    name: "Skill Enthusiast",
    description: "Clicked on all skills",
    icon: "Star",
  },
  {
    id: 3,
    name: "Project Connoisseur",
    description: "Viewed all projects",
    icon: "Briefcase",
  },
];
