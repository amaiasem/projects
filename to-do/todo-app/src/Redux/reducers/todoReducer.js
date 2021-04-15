/* eslint-disable max-len */
import toDoActionTypes from '../actions/toDoActionTypes';

export default function todoReducer(state = {}, actions) {
  let selectedCard = [];
  let notSelectedCards = [];
  let newState = {};
  // eslint-disable-next-line no-debugger
  debugger;
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
      newState = { cards: [...notSelectedCards, selectedCard = { ...selectedCard, tasks: [...selectedCard.tasks, { taskName: actions.data.name, description: actions.data.description }] }], card: selectedCard };
      return newState;
    default:
      return state;
  }
}
