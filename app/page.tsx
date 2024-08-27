"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { Progress } from "@/app/components/ui/progress";
import { Trophy } from "lucide-react";
import GameButton from "@/app/components/GameButton";
import ProfileSection from "@/app/components/ProfileSection";
import SkillsSection from "@/app/components/SkillsSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import AchievementsSection from "@/app/components/AchievementsSection";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import { LanguageProvider, useLanguage } from "@/app/contexts/LanguageContext";
import {
  developer,
  projects,
  skills,
  achievements,
} from "@/app/data/portfolioData";
import { translations } from "@/app/data/translations";

const GamifiedPortfolio = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeTab, setActiveTab] = useState("profile");
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [viewedSections, setViewedSections] = useState(new Set<string>());
  const [clickedSkills, setClickedSkills] = useState(new Set<string>());
  const [viewedProjects, setViewedProjects] = useState(new Set<number>());
  const [unlockedAchievements, setUnlockedAchievements] = useState(
    new Set<number>()
  );
  const [easterEggs, setEasterEggs] = useState(new Set<string>());
  const [secretSkillFound, setSecretSkillFound] = useState(false);

  useEffect(() => {
    setLevel(Math.floor(score / 100) + 1);
  }, [score]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setScore(score + 10);
    setViewedSections((prev) => new Set(prev).add(tab));
  };

  const handleSkillClick = () => {
    setScore(score + 5);
  };

  const handleProjectClick = (projectId: number) => {
    setScore(score + 5);
    setViewedProjects((prev) => new Set(prev).add(projectId));
  };

  const unlockAchievement = useCallback(
    (achievementId: number) => {
      if (!unlockedAchievements.has(achievementId)) {
        setUnlockedAchievements((prev) => new Set(prev).add(achievementId));
        setScore((prevScore) => prevScore + 50);
      }
    },
    [unlockedAchievements]
  );

  useEffect(() => {
    if (viewedSections.size === 3) unlockAchievement(1);
    if (clickedSkills.size === skills.length) unlockAchievement(2);
    if (viewedProjects.size === projects.length) unlockAchievement(3);
    if (secretSkillFound) unlockAchievement(4);
    if (easterEggs.size === 3) unlockAchievement(5);
  }, [
    viewedSections,
    clickedSkills,
    viewedProjects,
    secretSkillFound,
    easterEggs,
    unlockAchievement,
  ]);

  return (
    <div className="bg-gray-900 pt-40 h-screen">
      <div className="max-w-4xl mx-auto p-4 text-gray-100">
        <LanguageSwitcher />
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-400">
          {developer.name}&apos;s {t.portfolio}
        </h1>

        <Alert className="mb-4 bg-gray-800 border-blue-500">
          <Trophy className="h-4 w-4 text-yellow-400" />
          <AlertTitle className="text-blue-400">
            {t.level}: {level}
          </AlertTitle>
          <AlertDescription className="text-gray-200">
            {t.score}: {score}
          </AlertDescription>
          <Progress
            value={score % 100}
            className="mt-2 bg-gray-700"
            indicatorClassName="bg-blue-500"
          />
        </Alert>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <GameButton
            icon="User"
            label={t.profile}
            onClick={() => handleTabChange("profile")}
            active={activeTab === "profile"}
          />
          <GameButton
            icon="Code"
            label={t.skills}
            onClick={() => handleTabChange("skills")}
            active={activeTab === "skills"}
          />
          <GameButton
            icon="Briefcase"
            label={t.projects}
            onClick={() => handleTabChange("projects")}
            active={activeTab === "projects"}
          />
        </div>

        {activeTab === "profile" && <ProfileSection developer={developer} />}
        {activeTab === "skills" && (
          <SkillsSection
            skills={skills}
            onSkillClick={handleSkillClick}
            setClickedSkills={setClickedSkills}
          />
        )}
        {activeTab === "projects" && (
          <ProjectsSection
            projects={projects}
            onProjectClick={handleProjectClick}
          />
        )}

        <AchievementsSection
          achievements={achievements}
          unlockedAchievements={unlockedAchievements}
        />
      </div>
    </div>
  );
};

const WrappedGamifiedPortfolio = () => (
  <LanguageProvider>
    <GamifiedPortfolio />
  </LanguageProvider>
);

export default WrappedGamifiedPortfolio;
