import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Project } from "@/app/data/portfolioData";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/data/translations";

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onProjectClick,
}) => {
  const { language } = useLanguage();
  const t = translations[language];

  const test = projects[0].nameKey;
  console.log((t as any)[projects[0].nameKey]);
  console.log(projects[0].nameKey);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          onClick={() => onProjectClick(project.id)}
          className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700"
        >
          <CardHeader>
            <CardTitle className="text-blue-400">
              {(t as any)[project.nameKey]}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200 mb-2">{t[project.descriptionKey]}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-blue-400 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {tech} {project.nameKey}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsSection;
