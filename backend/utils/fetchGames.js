const axios = require("axios");

const getGameDetails = async (gameId) => {
  const access_token = await FetchTwitchToken(); // Obtén el token de acceso

  try {
    const response = await axios.post(
      "https://api.igdb.com/v4/games", // Endpoint para obtener detalles del juego
      `fields id, name, summary, cover.url, release_dates, platforms.name, characters.name; where id = ${gameId};`, // Consulta para obtener detalles y personajes
      {
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID, // Tu Client ID
          Authorization: `Bearer ${access_token}`, // Tu token de acceso
        },
      }
    );

    const gameDetails = response.data;
    console.log("Detalles del juego:", gameDetails); // Muestra los detalles del juego
    return gameDetails;
  } catch (error) {
    console.error("Error al obtener detalles del juego:", error.message);
    if (error.response) {
      console.error("Respuesta de error:", error.response.data);
    }
  }
};

const getTopRatedGames = async () => {
  const access_token = await FetchTwitchToken();

  try {
    const response = await axios.post(
      "https://api.igdb.com/v4/games",
      "fields id, name, rating; sort rating desc; limit 10;", // Body
      {
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const games = response.data;
    // console.log(games); // Esto mostrará los 10 juegos mejor valorados con su ID, nombre y calificación
    return games;
  } catch (error) {
    console.error(
      "Error al obtener los juegos mejor valorados:",
      error.message
    );
  }
};

const searchGameByName = async (gameName) => {
  console.log("el nombre del juego es: ", gameName);
  const access_token = await FetchTwitchToken(); // Asegúrate de tener esta función configurada
  try {
    const response = await axios.post(
      "https://api.igdb.com/v4/games",
      `search "${gameName}"; fields id, name, rating; limit 10;`, // Cuerpo de la petición
      {
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID, // Tu Client ID
          Authorization: `Bearer ${access_token}`, // Tu token de acceso
        },
      }
    );

    const games = response.data;
    // console.log("Resultados de búsqueda:", games);
    return games;
  } catch (error) {
    console.error("Error al buscar juegos:", error.message);
  }
};

const FetchTwitchToken = async () => {
  // console.log("valor obtenido del env", process.env.TWITCH_CLIENT_ID);
  const { data: result } = await axios.post(
    "https://id.twitch.tv/oauth2/token",
    null,
    {
      params: {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_CLIENT_ID_SECRET,
        grant_type: "client_credentials",
      },
    }
  );
  console.log("el acces token es: ", result.access_token);
  return result.access_token;
};

module.exports = getGameDetails;
