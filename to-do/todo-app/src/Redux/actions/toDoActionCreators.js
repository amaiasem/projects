import toDoActionTypes from './toDoActionTypes';

export default function loadTodos() {
  return {
    type: toDoActionTypes.LOAD_TODOS
  };
}

export function loadCard(cardName) {
  return {
    type: toDoActionTypes.LOAD_CARD,
    data: cardName
  };
}

export function createNewTask(card, name) {
  const newTask = { cardName: card, name };

  return {
    type: toDoActionTypes.CREATE_TASK,
    data: newTask
  };
}

export function deleteTask(card, task) {
  // eslint-disable-next-line no-console
  console.log(card, task);
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: toDoActionTypes.DELETE_TASK,
    data: { card, task }
  };
}
