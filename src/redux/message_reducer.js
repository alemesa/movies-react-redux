import keys from './keys';

const initialState = {
  messageVisibility: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case keys.TOGGLE_MESSAGE: {
      return { ...state, messageVisibility: !state.messageVisibility };
    }
    default: {
      return state;
    }
  }
}
