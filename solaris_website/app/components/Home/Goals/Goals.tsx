import React from "react";
import GoalsCards from "./GoalsCards";
import { MdGpsFixed, MdRotateRight, MdSecurity } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";

const Goals = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
        SOLARIS Core Features
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-105 md:w-170 lg:w-180 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50"></div>
      </h1>
      <div className="grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <GoalsCards
          icon={<MdGpsFixed />}
          title="Autonomous Solar Repositioning"
          description="SOLARIS autonomously moves and repositions itself to remain in optimal sunlight throughout the day, actively navigating outdoor environments to improve solar exposure as conditions change."
        />
        <GoalsCards
          icon={<MdRotateRight />}
          title="Intelligent Solar Panel Orientation"
          description="Rotates solar panels about multiple axes to maintain peak sunlight alignment, continuously adjusting panel orientation for maximum efficiency even when stationary."
        />
        <GoalsCards
          icon={<IoAnalytics />}
          title="Energy Awareness and Performance Tracking"
          description="Monitors key performance metrics including distance traveled, energy consumed, energy gained, and battery state of charge for comprehensive system insights."
        />
        <GoalsCards
          icon={<MdSecurity />}
          title="Safe Operation and User Interaction"
          description="Designed for safe outdoor operation with obstacle awareness, recovery behaviors, and wireless access to system data through an intuitive user interface."
        />
      </div>
    </div>
  );
};

export default Goals;