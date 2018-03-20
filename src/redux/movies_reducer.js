import keys from './keys';

const initialState = {
  popular: [],
  upcoming: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case keys.GET_POPULAR_MOVIES: {
      return { ...state, popular: action.data };
    }
    case keys.GET_UPCOMING_MOVIES: {
      return { ...state, upcoming: action.data };
    }
    default: {
      return state;
    }
  }
}
