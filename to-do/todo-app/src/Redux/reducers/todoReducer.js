import toDoActionTypes from '../actions/toDoActionTypes';
import initialState from '../stores/initialState';

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case toDoActionTypes.LOAD_TODOS:
      return state;
    default:
      return state;
  }
}
