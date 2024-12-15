export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
  description: string;
  studio: string;
  director: string;
  writer: string;
  cast: string[];
  genre: string[];
}