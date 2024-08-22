import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Developer } from "@/app/data/portfolioData";

interface ProfileSectionProps {
  developer: Developer;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ developer }) => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-blue-400">{developer.name}</CardTitle>
        <CardDescription className="text-gray-300">
          {developer.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-200 mb-4">{developer.description}</p>
        <div className="text-gray-200">
          <p>
            <strong className="text-blue-400">Email:</strong> {developer.email}
          </p>
          <p>
            <strong className="text-blue-400">GitHub:</strong>{" "}
            {developer.github}
          </p>
          <p>
            <strong className="text-blue-400">LinkedIn:</strong>{" "}
            {developer.linkedin}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
