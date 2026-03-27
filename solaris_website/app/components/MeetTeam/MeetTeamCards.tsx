"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Major = "Electrical Engineer" | "Computer Engineer";

interface Member {
  name: string;
  major: Major;
  intro: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  featured?: boolean;
  facePos: string;
  linkedin?: string;
  github?: string;
}

const majorStyle = (major: Major) =>
  major === "Electrical Engineer"
    ? { label: "text-[var(--highlight)]", border: "border-2 border-[var(--highlight)]/50" }
    : { label: "text-[var(--blue)]",      border: "border-2 border-[var(--blue)]/50" };

/* ── Modal ─────────────────────────────────────────────────────── */
const MemberModal = ({ member, onClose }: { member: Member; onClose: () => void }) => {
  const styles = majorStyle(member.major);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 top-[12vh] z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Outer shell — not scrollable so close btn stays pinned */}
      <div
        className={`relative w-full max-w-lg max-h-[85vh] flex flex-col
          bg-[var(--surface-2)] ${styles.border} rounded-2xl shadow-2xl overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center
            rounded-full bg-black/60 text-[var(--muted)] hover:text-[var(--text)] transition-colors text-sm"
        >
          ✕
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          {/* Photo — tall enough to show faces in the wider modal */}
          <div className="relative w-full h-[22rem] flex-shrink-0 overflow-hidden">
            <Image
              src={member.image}
              alt={`${member.name} headshot`}
              width={member.imageWidth}
              height={member.imageHeight}
              className="w-full h-full object-cover"
              style={{ objectPosition: member.facePos }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-2)] via-transparent to-transparent opacity-50" />
          </div>

          {/* Info */}
          <div className="px-5 py-4">
            <h2 className="text-[var(--text)] text-xl font-bold mb-0.5">{member.name}</h2>
            <p className={`${styles.label} text-xs font-semibold uppercase tracking-widest mb-3`}>
              {member.major}
            </p>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{member.intro}</p>

            {/* Social links — centered */}
            <div className="flex items-center justify-center gap-8">
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                    bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]
                    hover:border-[var(--accent)]/50 hover:text-[var(--accent)]
                    text-sm font-medium transition-all duration-200"
                >
                  <FaLinkedin className="text-base" />
                  LinkedIn
                </a>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]
                  text-sm font-medium opacity-50 cursor-not-allowed">
                  <FaLinkedin className="text-base" />
                  LinkedIn
                </span>
              )}

              {member.github ? (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg
                    bg-[var(--surface)] border border-[var(--border)] text-[var(--text)]
                    hover:border-[var(--accent)]/50 hover:text-[var(--accent)]
                    text-sm font-medium transition-all duration-200"
                >
                  <FaGithub className="text-base" />
                  GitHub
                </a>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]
                  text-sm font-medium opacity-50 cursor-not-allowed">
                  <FaGithub className="text-base" />
                  GitHub
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Vertical Card ──────────────────────────────────────────────── */
const VerticalCard = ({ member, onClick }: { member: Member; onClick: () => void }) => {
  const styles = majorStyle(member.major);
  const photoClass = member.featured
    ? "h-80 sm:h-72 lg:h-[28rem]"
    : "h-80 sm:h-72 lg:h-[24rem]";

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer flex flex-col h-full
        bg-[var(--surface)] ${styles.border} rounded-xl overflow-hidden
        hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        transition-all duration-300`}
    >
      <div className={`relative ${photoClass} flex-shrink-0 overflow-hidden`}>
        <Image
          src={member.image}
          alt={`${member.name} headshot`}
          width={member.imageWidth}
          height={member.imageHeight}
          className="w-full h-full object-cover"
          style={{ objectPosition: member.facePos }}
        />
      </div>

      <div className="flex flex-col p-4 border-t border-[var(--border)]">
        <h3 className="text-[var(--text)] text-lg font-bold mb-1">{member.name}</h3>
        <p className={`${styles.label} text-xs font-semibold uppercase tracking-widest mb-2`}>
          {member.major}
        </p>
        <p className="text-[var(--muted)] text-sm leading-relaxed line-clamp-3">
          {member.intro}
        </p>
      </div>
    </div>
  );
};

/* ── Horizontal Card (Rafael — square photo) ────────────────────── */
const HorizontalCard = ({ member, onClick }: { member: Member; onClick: () => void }) => {
  const styles = majorStyle(member.major);
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer flex flex-col sm:flex-row h-full
        bg-[var(--surface)] ${styles.border} rounded-xl overflow-hidden
        hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]
        transition-all duration-300`}
    >
      <div className="relative w-full aspect-square sm:w-56 sm:aspect-auto md:w-64 flex-shrink-0 overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name} headshot`}
          width={member.imageWidth}
          height={member.imageHeight}
          className="w-full h-full object-cover"
          style={{ objectPosition: member.facePos }}
        />
      </div>

      <div className="flex flex-col justify-center p-6 flex-1 border-t sm:border-t-0 sm:border-l border-[var(--border)]">
        <h3 className="text-[var(--text)] text-2xl font-bold mb-1">{member.name}</h3>
        <p className={`${styles.label} text-xs font-semibold uppercase tracking-widest mb-4`}>
          {member.major}
        </p>
        <p className="text-[var(--muted)] text-sm leading-relaxed">{member.intro}</p>
      </div>
    </div>
  );
};

/* ── Team data ─────────────────────────────────────────────────── */
const team: Member[] = [
  {
    name: "Nathan",
    major: "Electrical Engineer",
    intro: "Nathan is an Electrical Engineering student and U.S. Navy Veteran returning for his degree. When he graduates, he wants to work in the Controls  or DSP career fields. His role on SOLARIS is the PCB design,  and DC motor systems design. ",
    image: "/Nathan_Headshot.jpg",
    imageWidth: 3712,
    imageHeight: 5568,
    featured: true,
    facePos: "50% 8%",
    linkedin: "https://www.linkedin.com/in/nathan-hammond-457242260/", 
    github: "https://github.com/Natehamm66",  
  },
  {
    name: "Ryan",
    major: "Computer Engineer",
    intro: "Ryan is a Computer Engineering student with a passion for software design, embedded systems, and AI integration across hardware and software platforms. On SOLARIS, he serves as Software Lead and Web Chief, heading development of the companion app and web infrastructure while co-leading software-hardware integration efforts alongside Garrett. Outside of engineering, Ryan enjoys gaming and spending time with his cats.",
    image: "/Ryan_Headshot.jpg",
    imageWidth: 801,
    imageHeight: 2160,
    facePos: "50% 5%",
    linkedin: "https://www.linkedin.com/in/ryan-markowitz-710646327/", 
    github: "https://github.com/ryanmarkowitz",  
  },
  {
    name: "Garrett",
    major: "Computer Engineer",
    intro: "Garrett is a CpE Major with a focus in Digital VLSI Design. He has a passion for ASIC/FPGA design and likes to relax by playing stressful video games. His role on project SOLARIS is that of a hardware-software integration lead.",
    image: "/Garret_Headshot.jpg",
    imageWidth: 675,
    imageHeight: 1468,
    facePos: "50% 40%",
    linkedin: "https://www.linkedin.com/in/garrett-allen-fortier/", 
    github: "https://github.com/sonkuro",   
  },
  {
    name: "Rafael",
    major: "Electrical Engineer",
    intro: "Rafael is an Electrical Engineering major with a focus on power systems and robotics. He serves as the Project Manager and Power Systems Lead on SOLARIS.",
    image: "/Rafeal_Headshot.jpg",
    imageWidth: 400,
    imageHeight: 400,
    facePos: "50% 20%",
    linkedin: "https://www.linkedin.com/in/rafael-j-puig/", 
    github: "https://github.com/PrivatePilot701",   
  },
];

/* ── Layout ────────────────────────────────────────────────────── */
const MeetTeamCards = () => {
  const [selected, setSelected] = useState<Member | null>(null);
  const [nathan, ryan, garrett, rafael] = team;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        <div className="lg:col-span-2">
          <VerticalCard member={nathan} onClick={() => setSelected(nathan)} />
        </div>

        <div>
          <VerticalCard member={ryan} onClick={() => setSelected(ryan)} />
        </div>

        <div className="sm:col-span-2 sm:w-1/2 sm:mx-auto lg:col-span-1 lg:w-auto lg:mx-0">
          <VerticalCard member={garrett} onClick={() => setSelected(garrett)} />
        </div>

        <div className="sm:col-span-2 lg:col-span-2 lg:col-start-2">
          <HorizontalCard member={rafael} onClick={() => setSelected(rafael)} />
        </div>
      </div>

      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default MeetTeamCards;
