import { combineReducers } from 'redux';
import cards from './todoReducer';

const rootReducer = combineReducers({
  cards
});

export default rootReducer;
