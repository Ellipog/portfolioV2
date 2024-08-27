import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { SkillList } from "@/app/data/portfolioData";
import SkillCard from "@/app/components/SkillCard";

interface SkillsSectionProps {
  skills: SkillList[];
  onSkillClick: (skillName: string) => void;
  setClickedSkills: Function;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  onSkillClick,
  setClickedSkills,
}) => {
  const maxProjects = Math.max(...skills.map((skill) => skill.projects));
  const [displayedSkill, setDisplayedSkill] = useState<string>("");

  const handleCardClick = (skillName: string) => {
    setDisplayedSkill(skillName !== displayedSkill ? skillName : "");
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-blue-400">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        {skills.map((skill) => (
          <div onClick={() => handleCardClick(skill.name)} key={skill.name}>
            <SkillCard
              skills={skill}
              onSkillClick={onSkillClick}
              maxProjects={maxProjects}
              setClickedSkills={setClickedSkills}
              displayedSkill={displayedSkill}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
