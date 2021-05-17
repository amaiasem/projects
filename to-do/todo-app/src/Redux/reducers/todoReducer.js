/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import toDoActionTypes from '../actions/toDoActionTypes';

export default function todoReducer(state = {}, actions) {
  let selectedCard = [];

  switch (actions.type) {
    case toDoActionTypes.LOAD_TODOS:
      return { ...state, cards: actions.data };
    case toDoActionTypes.LOAD_CARD:
      selectedCard = state.cards.find((card) => card.name === actions.data);
      return { ...state, card: selectedCard };
    case toDoActionTypes.CREATE_CARD:
      return { ...state, cards: [...state.cards, actions.data] };
    case toDoActionTypes.UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => ((card._id === actions.data._id) ? actions.data : card))

      };
    case toDoActionTypes.DELETE_CARD:
      return { ...state, cards: state.cards.filter((card) => card._id !== actions.data._id) };
    case toDoActionTypes.CREATE_TASK:
      return {
        ...state,
        cards: state.cards.map((card) => ((card._id === actions.data._id) ? actions.data : card))

      };
    case toDoActionTypes.DELETE_TASK:
      return {
        ...state, cards: state.cards.map((card) => ((card._id === actions.data._id) ? actions.data : card))
      };
    case toDoActionTypes.CHECK_TASK:
      return {
        ...state, cards: state.cards.map((card) => ((card._id === actions.data._id) ? actions.data : card))
      };
    default:
      return state;
  }
}
