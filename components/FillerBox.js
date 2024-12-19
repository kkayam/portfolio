'use client';

import PortfolioBox from './PortfolioBox';
import { useState, useEffect } from 'react';

const searchQueries = [
  { query: 'japanese street night', alt: 'Colorful night street' },
  { query: 'cherry blossom japan', alt: 'Cherry blossom sakura' },
  { query: 'aesthetic japanese garden', alt: 'Japanese garden' },
  { query: 'cyberpunk city night', alt: 'Neon city lights' },
  { query: 'japanese temple sunset', alt: 'Temple sunset' },
  { query: 'cat cafe japan', alt: 'Japanese cat cafe' },
  { query: 'japanese autumn leaves', alt: 'Autumn in Japan' },
  { query: 'rainy tokyo street', alt: 'Rainy city street' },
  { query: 'sleeping cat window', alt: 'Cozy cat by window' },
  { query: 'aesthetic lofi room cat', alt: 'Cat in cozy room' }
];

// Keep track of used indices globally
let usedIndices = new Set();

// Reset used indices if all images have been used
const resetIfAllUsed = () => {
  if (usedIndices.size >= searchQueries.length) {
    usedIndices.clear();
  }
};

async function getUnsplashImage(query) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${query}&orientation=squarish`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
      }
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch image');
  }
  
  const data = await response.json();
  return {
    url: data.urls.regular,
    alt: data.alt_description || query
  };
}

export default function FillerBox() {
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchImage = async () => {
      try {
        resetIfAllUsed();
        
        // Get available indices
        const availableIndices = Array.from(
          { length: searchQueries.length }, 
          (_, i) => i
        ).filter(i => !usedIndices.has(i));
        
        // Select random query from remaining ones
        const randomIndex = availableIndices[
          Math.floor(Math.random() * availableIndices.length)
        ];
        
        usedIndices.add(randomIndex);
        const selectedQuery = searchQueries[randomIndex];
        
        const image = await getUnsplashImage(selectedQuery.query);
        setImageData({
          url: image.url,
          alt: selectedQuery.alt
        });
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
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