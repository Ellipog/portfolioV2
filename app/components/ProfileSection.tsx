import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Developer } from "@/app/data/portfolioData";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/data/translations";
interface ProfileSectionProps {
  developer: Developer;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ developer }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-blue-400">{developer.name}</CardTitle>
        <CardDescription className="text-gray-300">
          {developer.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-200 mb-4">{t.developer.description}</p>
        <div className="text-gray-200">
          <p>
            <strong className="text-blue-400">{t.email}:</strong>{" "}
            {developer.email}
          </p>
          <p>
            <strong className="text-blue-400">{t.github}:</strong>{" "}
            {developer.github}
          </p>
          <p>
            <strong className="text-blue-400">{t.linkedin}:</strong>{" "}
            {developer.linkedin}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
