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
  name: string;
  description: string;
  tech: string[];
}

export interface Skill {
  name: string;
  projects: number;
}

export interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  requiredLevel: number;
}

export const developer: Developer = {
  name: "Elliot Strand Aaen",
  title: "Full Stack Developer",
  description:
    "Passionate developer with 5 years of experience in creating web applications. Always eager to learn new technologies and solve complex problems.",
  email: "john.doe@example.com",
  github: "github.com/johndoe",
  linkedin: "linkedin.com/in/johndoe",
};

export const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description: "Built a full-stack e-commerce solution",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    name: "Weather App",
    description: "Created a responsive weather application",
    tech: ["React", "OpenWeatherAPI"],
  },
  {
    id: 3,
    name: "Task Manager",
    description: "Developed a Kanban-style task management tool",
    tech: ["Vue.js", "Firebase"],
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", projects: 15 },
  { name: "React", projects: 12 },
  { name: "Node.js", projects: 10 },
  { name: "Python", projects: 8 },
  { name: "SQL", projects: 7 },
  { name: "Secret Skill", projects: 0 },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    name: "Code Explorer",
    description: "Viewed all sections",
    icon: "Trophy",
    requiredLevel: 0,
  },
  {
    id: 2,
    name: "Skill Enthusiast",
    description: "Clicked on all skills",
    icon: "Star",
    requiredLevel: 0,
  },
  {
    id: 3,
    name: "Project Connoisseur",
    description: "Viewed all projects",
    icon: "Briefcase",
    requiredLevel: 0,
  },
  {
    id: 4,
    name: "Hidden Talent",
    description: "Found the secret skill",
    icon: "Eye",
    requiredLevel: 0,
  },
  {
    id: 5,
    name: "Easter Egg Hunter",
    description: "Discovered all hidden messages",
    icon: "Search",
    requiredLevel: 0,
  },
];
