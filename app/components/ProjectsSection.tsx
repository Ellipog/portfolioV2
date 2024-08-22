import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Project } from "@/app/data/portfolioData";

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onProjectClick,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          onClick={() => onProjectClick(project.id)}
          className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700"
        >
          <CardHeader>
            <CardTitle className="text-blue-400">{project.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-200 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-700 text-blue-400 rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {tech}
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
