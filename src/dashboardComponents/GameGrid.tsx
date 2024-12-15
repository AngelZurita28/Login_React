import React from "react";
import { GameCard } from "./GameCard";
import { Game } from "../types/game";

interface GameGridProps {
  games: Game[];
  onGameClick: (id: number) => void;
}

export const GameGrid: React.FC<GameGridProps> = ({ games, onGameClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} onClick={onGameClick} />
      ))}
    </div>
  );
};
