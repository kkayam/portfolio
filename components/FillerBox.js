'use client';

import PortfolioBox from './PortfolioBox';
import { useState, useEffect } from 'react';

const images = [
    // Japanese Streets & Cities
    {
        url: "/images/fillers/japanese-temple.jpg",
        alt: "Traditional Japanese temple"
    },
    {
        url: "/images/fillers/rainy-tokyo.jpg",
        alt: "Rainy Tokyo street at night"
    },
    // Nature & Gardens
    {
        url: "/images/fillers/cherry-blossom.jpg",
        alt: "Cherry blossom sakura"
    },
    {
        url: "/images/fillers/japanese-garden.jpg",
        alt: "Japanese garden"
    },
    // Cozy Cats
    {
        url: "/images/fillers/orange-cat.jpg",
        alt: "Cozy orange cat"
    },
    {
        url: "/images/fillers/window-cat.jpg",
        alt: "Cat by the window"
    },
    // Aesthetic Interiors
    {
        url: "/images/fillers/cafe-interior.jpg",
        alt: "Japanese cafe interior"
    },
    {
        url: "/images/fillers/lantern-street.jpg",
        alt: "Lantern lit street"
    },
    {
        url: "/images/fillers/reading-nook.jpg",
        alt: "Cozy reading nook"
    }
];

// Keep track of used indices globally
let usedIndices = new Set();

// Reset used indices if all images have been used
const resetIfAllUsed = () => {
    if (usedIndices.size >= images.length) {
    usedIndices.clear();
  }
};

export default function FillerBox() {
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
        resetIfAllUsed();

        // Get available indices
        const availableIndices = Array.from(
            { length: images.length },
          (_, i) => i
        ).filter(i => !usedIndices.has(i));

        // Select random image from remaining ones
        const randomIndex = availableIndices[
          Math.floor(Math.random() * availableIndices.length)
        ];

        usedIndices.add(randomIndex);
        setImageData(images[randomIndex]);
        setIsLoading(false);
  }, []);
  
  if (isLoading || !imageData) {
    return (
      <PortfolioBox noPadding className="overflow-hidden">
        <div className="relative w-full h-full bg-[#A66B47] animate-pulse" />
      </PortfolioBox>
    );
  }
  
  return (
    <PortfolioBox noPadding className="overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={imageData.url}
          alt={imageData.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
      </div>
    </PortfolioBox>
  );
} 