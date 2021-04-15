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

export function createNewTask(card, name, description) {
  const newTask = { cardName: card, name, description };
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: toDoActionTypes.CREATE_TASK,
    data: newTask
  };
}
