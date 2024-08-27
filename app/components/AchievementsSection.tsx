import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Achievement } from "@/app/data/portfolioData";
import { Trophy, Star, Briefcase } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/data/translations";

interface AchievementsSectionProps {
  achievements: Achievement[];
  unlockedAchievements: Set<number>;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  unlockedAchievements,
}) => {
  const { language } = useLanguage();
  const t = translations[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Trophy":
        return Trophy;
      case "Star":
        return Star;
      case "Briefcase":
        return Briefcase;
      default:
        return Trophy;
    }
  };

  return (
    <Card className="mt-4 bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-blue-400">{t.achievements}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement) => {
            const Icon = getIcon(achievement.icon);
            return (
              <div
                key={achievement.id}
                className={`flex items-center p-2 rounded-lg ${
                  unlockedAchievements.has(achievement.id)
                    ? "bg-blue-900"
                    : "bg-gray-700"
                }`}
              >
                <Icon
                  size={24}
                  className={
                    unlockedAchievements.has(achievement.id)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }
                />
                <div className="ml-2">
                  <h3 className="font-semibold text-gray-200">
                    {achievement.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsSection;
