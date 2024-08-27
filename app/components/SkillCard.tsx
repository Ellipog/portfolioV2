import React, { useState } from "react";
import { Progress } from "@/app/components/ui/progress";
import {
  Skill,
  SkillInfo,
  typeScriptSkillInfo,
} from "@/app/data/portfolioData";
import { Code2, FileCode2, Icon, Star, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, Briefcase } from "lucide-react";

interface SkillCardProps {
  skills: Skill;
  onSkillClick: (skillName: string) => void;
  maxProjects: number;
  setClickedSkills: Function;
  displayedSkill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skills,
  onSkillClick,
  maxProjects,
  setClickedSkills,
  displayedSkill,
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  const skillInfoList: { [key: string]: any } = {
    TypeScript: typeScriptSkillInfo,
  };

  const handleSkillClick = (skillName: string) => {
    setClickedSkills((prev: string) => new Set(prev).add(skillName));
    onSkillClick(skillName);
    setDisplay(!display);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded relative"
        onClick={() => handleSkillClick(skills.name)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between mb-1">
          <span className="text-gray-200">{skills.name}</span>
          <div className="flex items-center">
            <span className="text-blue-400 mr-2">
              {skills.projects} projects
            </span>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={
                    index < Math.ceil((skills.projects / maxProjects) * 5)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <Progress
          value={(skills.projects / maxProjects) * 100}
          className="h-2 bg-gray-700"
          indicatorClassName="bg-blue-500"
        />
        {displayedSkill === skills.name && (
          <div className="flex  gap-2 pt-2">
            {skillInfoList[skills.name]?.map(
              (info: SkillInfo, index: number) => {
                const Icon =
                  info.icon === "Docs"
                    ? FileCode2
                    : info.icon === "Code"
                    ? Code
                    : Briefcase;

                return (
                  <button
                    key={index}
                    className="flex justify-center items-center h-12 w-full rounded-md transition-all bg-gray-600 text-gray-200 hover:bg-gray-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(info.link);
                    }}
                  >
                    <Icon size={24} className="mr-2" />
                    {info.title}
                  </button>
                );
              }
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillCard;
