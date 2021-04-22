import axios from 'axios';
import toDoActionTypes from './toDoActionTypes';

export default function loadTodos() {
  return async function fetchInfo(dispatch) {
    const { data } = await axios.get('http://localhost:3000/todo-cards');
    dispatch({
      type: toDoActionTypes.LOAD_TODOS,
      data
    });
  };
}

export function loadCard(cardName) {
  return {
    type: toDoActionTypes.LOAD_CARD,
    data: cardName
  };
}

export function createNewTask(card, name) {
  return async (dispatch) => {
    const { data } = await axios.put(`http://localhost:3000/todo-cards/card/${card}`, { taskName: name, done: false });

    if (data === 'Could not add new task') {
      dispatch({
        type: toDoActionTypes.CREATE_TASK
      });
    } else {
      dispatch({
        type: toDoActionTypes.CREATE_TASK,
        data
      });
    }
  };
}

export function deleteTask(card, task) {
  return {
    type: toDoActionTypes.DELETE_TASK,
    data: { card, task }
  };
}

export function checkTask(card, task) {
  return {
    type: toDoActionTypes.CHECK_TASK,
    data: { card, task }
  };
}
