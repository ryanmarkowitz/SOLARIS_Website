import React from "react";

interface GoalsCardsProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const GoalsCards = ({ icon, title, description }: GoalsCardsProps) => {
  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-center">
      <div className="text-[var(--accent)] text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-[var(--text)] text-xl font-bold mb-3">
        {title}
      </h3>
      <p className="text-[var(--muted)] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default GoalsCards;