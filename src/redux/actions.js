import keys from '../redux/keys';
import { API_KEY } from '../util/api';
//const type = 'tv';
const type = 'movie';

export function toggle() {
  return {
    type: keys.TOGGLE_MESSAGE
  };
}

export function getPopularMovies() {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/${type}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const movies = await res.json();
    return dispatch({
      type: keys.GET_POPULAR_MOVIES,
      data: movies.results
    });
  };
}

export function getUpcomingMovies() {
  return async function(dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
    const movies = await res.json();
    return dispatch({
      type: keys.GET_UPCOMING_MOVIES,
      data: movies.results
    });
  };
}

export function getSpecificMovieById(id) {
  return async function(dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`);
    const movie = await res.json();
    return dispatch({
      type: keys.GET_MOVIE,
      data: movie
    });
  };
}

export function getSearchedMovies(query) {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const movies = await res.json();
    return dispatch({
      type: keys.GET_SEARCHED_MOVIES,
      data: movies.results
    });
  };
}

export function getGenres(query) {
  return async function(dispatch) {
    const res = await fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`);
    const genres = await res.json();
    return dispatch({
      type: keys.GET_GENRES,
      data: genres
    });
  };
}
