import keys from '../redux/keys';

export function toggle() {
  return {
    type: keys.TOGGLE_MESSAGE
  };
}

export function getMovies() {
  return async function(dispatch){
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=0ceedd539b0a1efa834d0c7318eb6355&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
    const movies = await res.json();
    return dispatch({
      type: keys.GET_MOVIES,
      data: movies.results
    });
  }
}