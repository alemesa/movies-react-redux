import { combineReducers } from 'redux';
import messageState from './message_reducer';
import moviesState from './movies_reducer';

const rootReducer = combineReducers({
  messageState,
  moviesState
});

export default rootReducer;
