import React from "react";
import { User, Code, Briefcase } from "lucide-react";

interface GameButtonProps {
  icon: "User" | "Code" | "Briefcase";
  label: string;
  onClick: () => void;
  active: boolean;
}

const GameButton: React.FC<GameButtonProps> = ({
  icon,
  label,
  onClick,
  active,
}) => {
  const Icon = icon === "User" ? User : icon === "Code" ? Code : Briefcase;

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-2 rounded-lg transition-all ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-700 text-gray-200 hover:bg-gray-600"
      }`}
    >
      <Icon size={24} className="mb-1" />
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default GameButton;
