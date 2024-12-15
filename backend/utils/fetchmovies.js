const axios = require("axios");

const FetchMovies = async () => {
  const {
    data: { results },
  } = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
    params: {
      api_key: "b2797cf10c3438c91e2d495177d040e8",
      query: "discover",
    },
  });

  return results[0];
};

// Exporta la promesa
module.exports = FetchMovies();
