"use client";
import { navLinks } from "../../../constants/constants";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { getAssetPath } from "../../../utils/assetPath";


type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`fixed ${navBg ? "bg-[var(--surface)] shadow-md" : "fixed"} w-full transition-all duration-200 h-[12vh] z-[1000]`}
    >
      <div className="flex items-center h-full justify-evenly mx-auto">
        {/* LOGO */}
        <div className="flex items-center px-10">
          <img src={getAssetPath("/SOLARIS.png")} alt="SOLARIS" className="h-12 md:h-16" />
        </div>
        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        
        {/* SPACER */}
        <div className="flex-1"></div>

        {/* HAMBURGER BARS */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer text-[var(--accent)] hover:text-[var(--highlight)] lg:hidden"
        ></HiBars3BottomRight>
      </div>
    </div>
  );
};

export default Nav;
