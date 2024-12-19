'use client';

import PortfolioBox from './PortfolioBox';
import { useState, useEffect } from 'react';

// Expanded image collection for more variety
const images = [
  {
    url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    alt: "Cute orange cat"
  },
  {
    url: "https://images.unsplash.com/photo-1574158622682-e40e69881006",
    alt: "Sleeping cat"
  },
  {
    url: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a",
    alt: "Aesthetic anime girl"
  },
  {
    url: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7",
    alt: "Cute cat close-up"
  },
  {
    url: "https://images.unsplash.com/photo-1542931287-023b922fa89b",
    alt: "Colorful anime street"
  },
  {
    url: "https://images.unsplash.com/photo-1615796153287-98eacf0abb13",
    alt: "Aesthetic sakura"
  },
  {
    url: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec",
    alt: "Cute white cat"
  },
  {
    url: "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
    alt: "Playful kitten"
  }
];

// Keep track of used images globally
let usedIndices = new Set();

// Reset used indices if all images have been used
const resetIfAllUsed = () => {
  if (usedIndices.size >= images.length) {
    usedIndices.clear();
  }
};

export default function FillerBox() {
  const [selectedImage, setSelectedImage] = useState(null);
  
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
    setSelectedImage(images[randomIndex]);
  }, []);
  
  if (!selectedImage) return null;
  
  return (
    <PortfolioBox noPadding className="overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={selectedImage.url}
          alt={selectedImage.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
      </div>
    </PortfolioBox>
  );
} 