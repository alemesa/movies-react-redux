export const API_KEY = '0ceedd539b0a1efa834d0c7318eb6355';
export const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
export const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

// search specific movie by id
export function getSpecificMovieById(id) {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
}

// search upcoming movies
export function getUpcomingMovies() {
  return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
}

// popular route
export function getPopularMovies() {
  return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
}

// search query movie name
export function getSearchMovies(query) {
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
}
