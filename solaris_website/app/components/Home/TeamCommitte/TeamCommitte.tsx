import React from "react";
import PersonCard from "./PersonCard";

const TeamCommitte = () => {
  return (
    <div className="pt-16 pb-16 bg-[var(--bg)]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
          Team & Committee
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-90 md:w-150 lg:w-160 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50"></div>
        </h1>

        {/* Advisor Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 text-center">Advisor</h2>
          <div className="max-w-xs mx-auto">
            <PersonCard name="Dr. Suboh Suboh" role="Advisor" type="advisor" />
          </div>
        </div>

        {/* Committee Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 text-center">Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <PersonCard name="Dr. Maddox" role="Professor Assistant" type="committee" />
            <PersonCard name="Dr. Rakshan" role="Professor Adjunct" type="committee" />
            <PersonCard name="Dr. Sahawneh" role="Full-time Lecturer" type="committee" />
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 text-center">Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <PersonCard name="Ryan Markowitz" role="Computer Engineering" type="team" />
            <PersonCard name="Rafeal Puig" role="Electrical Engineering" type="team" />
            <PersonCard name="Nathan Hammond" role="Electrical Engineering" type="team" />
            <PersonCard name="Garret Fortier" role="Computer Engineering" type="team" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCommitte;