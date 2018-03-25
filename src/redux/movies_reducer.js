import keys from './keys';

const initialState = {
  popular: [],
  upcoming: [],
  searched: [],
  movie: {},
  genres: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case keys.GET_POPULAR_MOVIES: {
      return { ...state, popular: action.data };
    }
    case keys.GET_UPCOMING_MOVIES: {
      return { ...state, upcoming: action.data };
    }
    case keys.GET_MOVIE: {
      return { ...state, movie: action.data };
    }
    case keys.GET_GENRES: {
      return { ...state, genres: action.data };
    }
    case keys.GET_SEARCHED_MOVIES: {
      return { ...state, searched: action.data };
    }
    default: {
      return state;
    }
  }
}
