import React from "react";
import { FaFileAlt, FaCogs, FaChartBar, FaDesktop } from "react-icons/fa";
import WhatForCards from "./WhatForCards";

const WhatFor = () => {
  return (
    <div className="pt-16 pb-16 bg-[var(--surface)]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
          What's This Website For?
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-105 md:w-170 lg:w-180 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50"></div>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <WhatForCards
            icon={<FaFileAlt />}
            title="Project Documentation"
            description="Comprehensive documentation and design decisions throughout the development process"
            borderColor="accent"
          />
          <WhatForCards
            icon={<FaCogs />}
            title="System Architecture"
            description="Detailed system architecture and development progress tracking"
            borderColor="highlight"
          />
          <WhatForCards
            icon={<FaChartBar />}
            title="Test Results & Demos"
            description="Comprehensive test results, live demos, and final project deliverables"
            borderColor="accent"
          />
          <WhatForCards
            icon={<FaDesktop />}
            title="Presentation Materials"
            description="Professional slides, reports, and supporting materials for academic review"
            borderColor="highlight"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatFor;