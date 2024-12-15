import React from 'react';
import { Film, Gamepad2 } from 'lucide-react';

interface ContentToggleProps {
  activeType: 'movies' | 'games';
  onToggle: (type: 'movies' | 'games') => void;
}

export const ContentToggle: React.FC<ContentToggleProps> = ({ activeType, onToggle }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-100 p-1 rounded-lg inline-flex">
        <button
          onClick={() => onToggle('movies')}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            activeType === 'movies'
              ? 'bg-white shadow-sm text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Film className="w-5 h-5 mr-2" />
          Movies
        </button>
        <button
          onClick={() => onToggle('games')}
          className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            activeType === 'games'
              ? 'bg-white shadow-sm text-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Gamepad2 className="w-5 h-5 mr-2" />
          Games
        </button>
      </div>
    </div>
  );
}