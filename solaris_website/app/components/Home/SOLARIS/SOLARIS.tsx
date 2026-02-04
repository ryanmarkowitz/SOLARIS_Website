import React from "react";
import Image from "next/image";
import { getAssetPath } from "../../../utils/assetPath";

const SOLARIS = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] bg-[var(--bg)]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
          About SOLARIS
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 md:w-125 lg:w-150 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50"></div>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT TEXT COLUMN: HEADING */}
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="flex justify-center flex-col text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem] text-[var(--text)]">
                The Future of Solar Energy is Here!
              </h1>
              <p className="text-[var(--muted)]">
                SOLARIS (Solar-Optimized Land Autonomous Recharge and Intelligence System) 
                is a senior design project centered on building a solar-powered mobile robot 
                that actively positions itself to capture sunlight throughout the day. The project 
                focuses on enabling autonomous movement and adaptability in outdoor environments, 
                with the goal of improving solar energy collection through intelligent repositioning. 
                SOLARIS brings together mobility, solar power, and decision-making to demonstrate a dynamic 
                alternative to fixed solar systems.
              </p>
            </div>
          </div>
          {/* IMAGE CONTENT */}
          <div className="hidden space-y-2 lg:flex lg:flex-col lg:items-center">
            <Image
              src={getAssetPath("/SOLARIS_model1.png")}
              alt="SOLARIS Model"
              width={500}
              height={500}
              className="rounded-3xl drop-shadow-[0_0_50px_rgba(251,146,60,0.4)]"
            />
            <div className="mt-4 mb-8 bg-[var(--surface-2)] border border-[var(--border)] rounded-lg px-4 py-2">
              <p className="text-[var(--muted)] text-sm text-center font-medium">SOLARIS 3D Prototype</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOLARIS;