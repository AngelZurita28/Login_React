import { Movie } from '../types/movie';

export const movies: Movie[] = [
  {
    id: 1,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    studio: "Paramount Pictures",
    director: "Francis Ford Coppola",
    writer: "Mario Puzo",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    genre: ["Crime", "Drama"]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=800",
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    studio: "Castle Rock Entertainment",
    director: "Frank Darabont",
    writer: "Stephen King",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    genre: ["Drama"]
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800",
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    studio: "Miramax",
    director: "Quentin Tarantino",
    writer: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    genre: ["Crime", "Drama"]
  }
];