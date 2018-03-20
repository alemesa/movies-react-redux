import keys from '../redux/keys';
import { API_KEY } from '../util/api';

export function toggle() {
  return {
    type: keys.TOGGLE_MESSAGE
  };
}

export function getPopularMovies() {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
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
