import React from "react";
import Image from "next/image";

interface ProgressCardsProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ProgressCards = ({ imageSrc, title, description, onClick }: ProgressCardsProps) => {
  return (
    <div className="flex-shrink-0 w-80 bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-colors cursor-pointer" onClick={onClick}>
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-[var(--text)] text-lg font-bold mb-2">{title}</h3>
        <p className="text-[var(--muted)] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProgressCards;