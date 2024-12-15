const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const firstMoviePromise = require("./utils/fetchmovies");
const getGameDetails = require("./utils/fetchGames");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3000, "0.0.0.0", () => {
  // (async () => {
  //   try {
  //     const firstMovie = await firstMoviePromise; // Espera la resolución de la promesa
  //     console.log("Primera película:", firstMovie);
  //   } catch (error) {
  //     console.error("Error al obtener la primera película:", error.message);
  //   }
  // })();

  // (async () => {
  //   try {
  //     const game = await games; // Espera la resolución de la promesa
  //     console.log("game:", game); // Esto mostrará la primera película
  //   } catch (error) {
  //     console.error("Error al obtener:", error.message);
  //   }
  // })();
  // (async () => {
  //   const gameId = 159190; // ID del juego para el cual deseas obtener los personajes
  //   const gameDetails = await getGameDetails(gameId);
  //   console.log("Detalles del juego:", gameDetails);
  // })();
  console.log("Servidor escuchando en puerto 3000");
});
