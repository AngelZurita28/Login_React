import { useState, useMemo } from 'react';
import { Game } from '../types/game';
import { games } from '../data/games';

export const useGameSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = useMemo(() => {
    if (!searchQuery) return games;
    
    const query = searchQuery.toLowerCase();
    return games.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.developer.toLowerCase().includes(query) ||
      game.genres.some(g => g.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredGames
  };
}