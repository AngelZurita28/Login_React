import React from 'react';
import { X, Star, Monitor, Building2 } from 'lucide-react';
import { Game } from '../types/game';

interface GameDetailProps {
  game: Game;
  onClose: () => void;
}

export const GameDetail: React.FC<GameDetailProps> = ({ game, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={game.cover} 
            alt={game.title}
            className="w-full h-[400px] object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900">{game.title}</h2>
            <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="ml-1 font-semibold">{game.rating}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Year</p>
              <p className="font-medium">{game.year}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Developer</p>
              <p className="font-medium">{game.developer}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Publisher</p>
              <p className="font-medium">{game.publisher}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{game.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Platforms</h3>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map((platform, index) => (
                <span 
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <Monitor className="w-4 h-4 mr-1" />
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Main Characters</h3>
            <div className="flex flex-wrap gap-2">
              {game.mainCharacters.map((character, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {character}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {game.genres.map((genre, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}