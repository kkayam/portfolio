import PortfolioBox from './PortfolioBox';

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
  }
];

export default function FillerBox() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  return (
    <PortfolioBox noPadding className="overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={randomImage.url}
          alt={randomImage.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors duration-300" />
      </div>
    </PortfolioBox>
  );
} 