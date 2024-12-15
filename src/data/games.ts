import { Game } from '../types/game';

export const games: Game[] = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    year: 2017,
    rating: 9.7,
    cover: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800",
    description: "Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild.",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    platforms: ["Nintendo Switch", "Wii U"],
    genres: ["Action", "Adventure", "Open World"],
    mainCharacters: ["Link", "Princess Zelda", "Ganon"]
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    year: 2018,
    rating: 9.5,
    cover: "https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&q=80&w=800",
    description: "An epic tale of life in America's unforgiving heartland, featuring a vast and atmospheric world.",
    developer: "Rockstar Games",
    publisher: "Take-Two Interactive",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    genres: ["Action", "Adventure", "Western"],
    mainCharacters: ["Arthur Morgan", "John Marston", "Dutch van der Linde"]
  },
  {
    id: 3,
    title: "God of War",
    year: 2018,
    rating: 9.6,
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800",
    description: "Journey with Kratos and Atreus as they embark on a mythic quest through the Norse realms.",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    platforms: ["PlayStation 4", "PC"],
    genres: ["Action", "Adventure", "RPG"],
    mainCharacters: ["Kratos", "Atreus", "Freya"]
  }
];