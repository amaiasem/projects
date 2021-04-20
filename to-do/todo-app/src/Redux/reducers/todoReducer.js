/* eslint-disable max-len */
import toDoActionTypes from '../actions/toDoActionTypes';

export default function todoReducer(state = {}, actions) {
  // eslint-disable-next-line no-debugger
  debugger;
  let selectedCard = [];
  let tasks = [];
  let notSelectedCards = [];
  let newState = {};

  switch (actions.type) {
    case toDoActionTypes.LOAD_TODOS:
      return state;
    case toDoActionTypes.LOAD_CARD:
      selectedCard = state.cards.find((card) => card.name === actions.data);
      return { ...state, card: selectedCard };
    case toDoActionTypes.CREATE_TASK:
      newState = { ...state };
      selectedCard = newState.cards.find((card) => card.name === actions.data.cardName);
      notSelectedCards = newState.cards.filter((card) => card.name !== actions.data.cardName);
      newState = { cards: [...notSelectedCards, selectedCard = { ...selectedCard, tasks: [...selectedCard.tasks, { taskName: actions.data.name }] }], card: selectedCard };
      return newState;
    case toDoActionTypes.DELETE_TASK:
      newState = { ...state };
      selectedCard = newState.cards.find((card) => card.name === actions.data.card);
      tasks = selectedCard.tasks.filter((task) => task.taskName !== actions.data.task);
      notSelectedCards = newState.cards.filter((card) => card.name !== actions.data.card);
      newState = { cards: [...notSelectedCards, selectedCard = { ...selectedCard, tasks }] };
      // eslint-disable-next-line no-console
      console.log(newState);
      return newState;
    default:
      return state;
  }
}
