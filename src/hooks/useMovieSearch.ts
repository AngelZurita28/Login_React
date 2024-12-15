import { useState, useMemo } from 'react';
import { Movie } from '../types/movie';
import { movies } from '../data/movies';

export const useMovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = useMemo(() => {
    if (!searchQuery) return movies;
    
    const query = searchQuery.toLowerCase();
    return movies.filter(movie => 
      movie.title.toLowerCase().includes(query) ||
      movie.director.toLowerCase().includes(query) ||
      movie.genre.some(g => g.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredMovies
  };
}