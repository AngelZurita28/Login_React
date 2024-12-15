export interface Game {
  id: number;
  title: string;
  year: number;
  rating: number;
  cover: string;
  description: string;
  developer: string;
  publisher: string;
  platforms: string[];
  genres: string[];
  mainCharacters: string[];
}