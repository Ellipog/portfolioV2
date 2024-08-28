import { LucideIcon } from "lucide-react";

export interface Developer {
  name: string;
  title: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: number;
  nameKey: string;
  description: string;
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
  description: "developer.description",
  email: "john.doe@example.com",
  github: "github.com/johndoe",
  linkedin: "linkedin.com/in/johndoe",
};

export const projects: Project[] = [
  {
    id: 1,
    nameKey: "0.name",
    description: "0.description",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    nameKey: "1.name",
    description: "1.description",
    tech: ["React", "OpenWeatherAPI"],
  },
  {
    id: 3,
    nameKey: "2.name",
    description: "2.description",
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

export const achievements: Achievement[] = [
  {
    id: 1,
    name: "0.name",
    description: "0.description",
    icon: "Trophy",
  },
  {
    id: 2,
    name: "1.name",
    description: "1.description",
    icon: "Star",
  },
  {
    id: 3,
    name: "2.name",
    description: "2.description",
    icon: "Briefcase",
  },
];

export const typeScriptSkillInfo: SkillInfo[] = [
  {
    link: "https://www.typescriptlang.org/",
    icon: "Docs",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Trophy",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
];

export const nextJSSkillInfo: SkillInfo[] = [
  {
    link: "https://nextjs.org/",
    icon: "Docs",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Trophy",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
];

export const reactSkillInfo: SkillInfo[] = [
  {
    link: "https://react.dev/",
    icon: "Docs",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Trophy",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
  {
    link: "https://github.com/Ellipog",
    icon: "Github",
  },
];
