import keys from './keys';

const initialState = {
  messageVisibility: false,
  movies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case keys.TOGGLE_MESSAGE: {
      return { ...state, messageVisibility: !state.messageVisibility };
    }
    case keys.GET_MOVIES: {
      return { ...state, movies: action.data };
    }

    default: {
      return state;
    }
  }
}
