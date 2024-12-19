'use client';

export default function DialogBox({ isOpen, onClose, title, children, size = '1x1' }) {
  if (!isOpen) return null;

  const sizeClasses = {
    '1x1': 'aspect-square max-w-[80vh]',
    '2x1': 'aspect-[2/1] max-w-[120vh]',
    '1x2': 'aspect-[1/2] max-h-[90vh]',
    '2x2': 'aspect-square max-w-[90vh]',
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className={`
          bg-[#C17F59] 
          rounded-2xl 
          w-full 
          shadow-xl
          ${sizeClasses[size]}
        `}
        onClick={e => e.stopPropagation()}
      >
        <div className="h-full p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors ml-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="
            h-[calc(100%-2rem-32px)] 
            overflow-auto 
            scrollbar-thin 
            scrollbar-track-transparent 
            scrollbar-thumb-[#ffffff80]
            hover:scrollbar-thumb-[#ffffff80]
            transition-colors
            duration-200
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar-thumb]:rounded-full
          ">
            <div className="text-base space-y-4 text-white">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 