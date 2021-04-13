/* eslint-disable no-debugger */
import toDoActionTypes from '../actions/toDoActionTypes';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case toDoActionTypes.LOAD_TODOS:
      return state;
    default:
      return state;
  }
}
