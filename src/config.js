const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "aa7ca0969c476e3a6c96176e202c1bd9";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const UPCOMING_BASE_URL = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;

const TV_BASE_URL = `${API_URL}tv/latest?api_key=${API_KEY}&language=en-US`;

const LATEST_BASE_URL = `${API_URL}movie/latest?api_key=${API_KEY}`;

const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w500";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  UPCOMING_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  TV_BASE_URL,
  LATEST_BASE_URL
};
