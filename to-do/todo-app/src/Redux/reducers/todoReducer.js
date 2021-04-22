/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import toDoActionTypes from '../actions/toDoActionTypes';

export default function todoReducer(state = {}, actions) {
  let selectedCard = [];
  let tasks = [];
  let notSelectedCards = [];
  let newState = {};

  switch (actions.type) {
    case toDoActionTypes.LOAD_TODOS:
      return { ...state, cards: actions.data };
    case toDoActionTypes.LOAD_CARD:
      selectedCard = state.cards.find((card) => card.name === actions.data);
      return { ...state, card: selectedCard };
    case toDoActionTypes.CREATE_TASK:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card._id === actions.data._id) {
            return actions.data;
          }
          return card;
        })
      };
    case toDoActionTypes.DELETE_TASK:
      newState = { ...state };
      selectedCard = newState.cards.find((card) => card.name === actions.data.card);
      tasks = selectedCard.tasks.filter((task) => task.taskName !== actions.data.task);
      notSelectedCards = newState.cards.filter((card) => card.name !== actions.data.card);
      newState = { cards: [...notSelectedCards, selectedCard = { ...selectedCard, tasks }] };
      return newState;
      // case toDoActionTypes.CHECK_TASK:
      //  newState = { ...state };
      //  selectedCard = newState.cards.filter((card) => card.name === actions.data.card);
      //  selectedCard.done = actions.data.task.done ? selectedCard.done -= 1 : selectedCard.done += 1;
      //  tasks = selectedCard.taks.map((task) => {

    //  return state;
    default:
      return state;
  }
}
