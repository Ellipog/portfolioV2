import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import { Skill } from "@/app/data/portfolioData";
import { Star, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillsSectionProps {
  skills: Skill[];
  onSkillClick: (skillName: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills,
  onSkillClick,
}) => {
  const [clickedSkills, setClickedSkills] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState<string | null>(null);
  const maxProjects = Math.max(...skills.map((skill) => skill.projects));

  const handleSkillClick = (skillName: string) => {
    setClickedSkills((prev) => new Set(prev).add(skillName));
    onSkillClick(skillName);
  };

  const allSkillsClicked = clickedSkills.size === skills.length - 1;

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-blue-400">Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          {skills.map(
            (skill) =>
              (skill.name !== "Secret Skill" || allSkillsClicked) && (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-4 cursor-pointer hover:bg-gray-700 p-2 rounded relative"
                  onClick={() => handleSkillClick(skill.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-200">{skill.name}</span>
                    <div className="flex items-center">
                      <span className="text-blue-400 mr-2">
                        {skill.projects} projects
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className={
                              index <
                              Math.ceil((skill.projects / maxProjects) * 5)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Progress
                    value={(skill.projects / maxProjects) * 100}
                    className="h-2 bg-gray-700"
                    indicatorClassName="bg-blue-500"
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
