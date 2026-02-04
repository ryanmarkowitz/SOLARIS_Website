import React from "react";

interface PersonCardProps {
  name: string;
  role: string;
  type: "team" | "committee" | "advisor";
}

const PersonCard = ({ name, role, type }: PersonCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "team":
        return "border-[var(--accent)] bg-gradient-to-br from-[var(--accent)]/10 to-transparent";
      case "committee":
        return "border-[var(--highlight)] bg-gradient-to-br from-[var(--highlight)]/10 to-transparent";
      case "advisor":
        return "border-[var(--blue)] bg-gradient-to-br from-[var(--blue)]/10 to-transparent";
      default:
        return "border-[var(--border)]";
    }
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${getTypeColor()}`}>
      <h3 className="text-[var(--text)] text-lg font-bold mb-2">{name}</h3>
      <p className="text-[var(--muted)] text-sm">{role}</p>
    </div>
  );
};

export default PersonCard;