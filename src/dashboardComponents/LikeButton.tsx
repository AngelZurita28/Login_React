import React from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  isLiked: boolean;
  onToggle: () => void;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onToggle }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      <Heart 
        className={`w-5 h-5 ${
          isLiked 
            ? 'text-red-500 fill-current' 
            : 'text-gray-600 hover:text-red-500'
        }`} 
      />
    </button>
  );
};