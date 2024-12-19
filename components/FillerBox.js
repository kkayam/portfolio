const sizeClasses = {
  '1x1': 'aspect-square',
  '2x1': 'md:col-span-2 aspect-[2/1]',
  '1x2': 'row-span-2 aspect-[1/2]',
  '2x2': 'md:col-span-2 row-span-2 aspect-square',
};

const fillerContents = [
  {
    type: 'pattern',
    className: 'bg-[#A66B47] bg-opacity-40 backdrop-blur-sm'
  },
  {
    type: 'gradient',
    className: 'bg-gradient-to-br from-[#C17F59] to-[#8B4513] opacity-40'
  },
  {
    type: 'dots',
    className: 'bg-[#C17F59] bg-opacity-30 backdrop-blur-sm [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]'
  }
];

export default function FillerBox({ className = '', size = '1x1' }) {
  const filler = fillerContents[Math.floor(Math.random() * fillerContents.length)];
  
  return (
    <div className={`
      rounded-2xl 
      shadow-lg 
      transition-all
      duration-500
      hover:shadow-xl
      hover:opacity-50
      w-full
      ${sizeClasses[size]}
      ${filler.className}
      ${className}
    `} />
  );
} 