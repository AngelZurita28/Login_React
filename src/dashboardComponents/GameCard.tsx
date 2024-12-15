import React from 'react';
import { Star } from 'lucide-react';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
  onClick: (id: number) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(game.id)}
    >
      <img 
        src={game.cover} 
        alt={game.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900">{game.title}</h3>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700">{game.rating}</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{game.year}</span>
          <span>{game.genres.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}