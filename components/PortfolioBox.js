const sizeClasses = {
  '1x1': 'aspect-square',
  '2x1': 'md:col-span-2 aspect-[2/1]',
  '1x2': 'row-span-2 aspect-[1/2]',
  '2x2': 'md:col-span-2 row-span-2 aspect-square',
};

export default function PortfolioBox({ 
  title, 
  children, 
  size = '1x1',
  className = ''
}) {
  return (
    <div className={`
      bg-[#C17F59] 
      text-white
      rounded-2xl 
      shadow-lg 
      hover:shadow-xl 
      transition-shadow
      w-full
      ${sizeClasses[size]}
      ${className}
    `}>
      <div className="h-full p-8">
        {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
        <div className="h-[calc(100%-1rem-32px)] overflow-auto">
          <div className="text-base space-y-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 