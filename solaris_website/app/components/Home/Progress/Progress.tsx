"use client"
import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import ProgressCards from "./ProgressCards";
import Image from "next/image";
import { getAssetPath } from "../../../utils/assetPath";

const Progress = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const progressImages = [
    {
      src: getAssetPath("/SOLARIS.png"),
      title: "Initial Design",
      description: "Early concept and design phase of SOLARIS"
    },
    {
      src: getAssetPath("/SOLARIS_model.png"), 
      title: "3D Model",
      description: "First 3D model and prototype design"
    },
    {
      src: getAssetPath("/file.svg"),
      title: "Component Testing",
      description: "Testing individual components and systems"
    },
    {
      src: getAssetPath("/globe.svg"),
      title: "Integration Phase",
      description: "Integrating all systems together"
    },
    {
      src: getAssetPath("/next.svg"),
      title: "Software Development",
      description: "Developing control algorithms and user interface"
    },
    {
      src: getAssetPath("/vercel.svg"),
      title: "Hardware Assembly",
      description: "Assembling physical components and wiring"
    },
    {
      src: getAssetPath("/window.svg"),
      title: "Field Testing",
      description: "Testing SOLARIS in outdoor environments"
    },
    {
      src: getAssetPath("/SOLARIS_model1.png"),
      title: "Final Prototype",
      description: "Completed SOLARIS prototype ready for demonstration"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const openImageViewer = (image: { src: string; title: string; description: string }) => {
    setSelectedImage(image);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16 pb-16 bg-[var(--bg)]">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[var(--text)] mb-16 pb-8 relative">
          Progress
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 md:w-64 lg:w-80 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] rounded-full shadow-lg shadow-[var(--accent)]/50"></div>
        </h1>
        <p className="text-center text-[var(--muted)] mb-8">Placeholders for Now</p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--surface)] border border-[var(--border)] rounded-full p-3 hover:bg-[var(--surface-2)] transition-colors"
          >
            <FaChevronLeft className="text-[var(--accent)] text-xl" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--surface)] border border-[var(--border)] rounded-full p-3 hover:bg-[var(--surface-2)] transition-colors"
          >
            <FaChevronRight className="text-[var(--accent)] text-xl" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {progressImages.map((image, index) => (
              <ProgressCards
                key={index}
                imageSrc={image.src}
                title={image.title}
                description={image.description}
                onClick={() => openImageViewer(image)}
              />
            ))}
          </div>
        </div>

        {/* Image Viewer Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] bg-[var(--surface)] rounded-lg overflow-hidden">
              <button
                onClick={closeImageViewer}
                className="absolute top-4 right-4 z-10 bg-[var(--bg)] rounded-full p-2 hover:bg-[var(--surface-2)] transition-colors"
              >
                <FaTimes className="text-[var(--text)] text-xl" />
              </button>
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[var(--text)] text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-[var(--muted)]">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progress;