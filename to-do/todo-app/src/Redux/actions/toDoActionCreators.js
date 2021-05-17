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

export function createCard(newCard) {
  return async (dispatch) => {
    const { data } = await axios.post('http://localhost:3000/todo-cards', newCard);

    if (data === 'Could not create a new Card') {
      dispatch({
        type: toDoActionTypes.CREATE_CARD
      });
    } else {
      dispatch({
        type: toDoActionTypes.CREATE_CARD,
        data
      });
    }
  };
}

export function deleteCard(cardId) {
  return async (dispatch) => {
    const { data } = await axios.delete('http://localhost:3000/todo-cards', { data: { _id: cardId } });
    dispatch({
      type: toDoActionTypes.DELETE_CARD,
      data
    });
  };
}

export function updateCardColor(cardID, color) {
  const card = { _id: cardID, color };
  return async (dispatch) => {
    const { data } = await axios.put('http://localhost:3000/todo-cards', card);
    dispatch({
      type: toDoActionTypes.UPDATE_CARD,
      data
    });
  };
}

export function updateCardName(cardID, name) {
  const card = { _id: cardID, name };
  return async (dispatch) => {
    const { data } = await axios.put('http://localhost:3000/todo-cards', card);
    dispatch({
      type: toDoActionTypes.UPDATE_CARD,
      data
    });
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
  return async (dispatch) => {
    const { data } = await axios.put(`http://localhost:3000/todo-cards/${card}/tasks/${task}`);

    if (data === 'Could not delete the task') {
      dispatch({
        type: toDoActionTypes.DELETE_TASK
      });
    } else {
      dispatch({
        type: toDoActionTypes.DELETE_TASK,
        data
      });
    }
  };
}

export function checkTask(cardID, task) {
  return async (dispatch) => {
    const { data } = await axios.put(`http://localhost:3000/todo-cards/${cardID}/update-task`, task);

    if (data === 'Could not update the task') {
      dispatch({
        type: toDoActionTypes.CHECK_TASK
      });
    } else {
      dispatch({
        type: toDoActionTypes.CHECK_TASK,
        data
      });
    }
  };
}
