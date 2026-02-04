import React from "react";

interface WhatForCardsProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  borderColor: "accent" | "highlight";
}

const WhatForCards = ({ icon, title, description, borderColor }: WhatForCardsProps) => {
  const borderColorClass = borderColor === "accent" ? "border-[var(--accent)]" : "border-[var(--highlight)]";
  const iconColorClass = borderColor === "accent" ? "text-[var(--accent)]" : "text-[var(--highlight)]";

  return (
    <div className={`flex items-start gap-6 p-6 bg-[var(--bg)] border-l-4 ${borderColorClass} rounded-r-lg`}>
      <div className={`${iconColorClass} text-3xl mt-1 flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="text-[var(--text)] text-xl font-bold mb-2">{title}</h3>
        <p className="text-[var(--muted)] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default WhatForCards;