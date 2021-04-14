import toDoActionTypes from '../actions/toDoActionTypes';

export default function todoReducer(state = [], actions) {
  let selectedCard = [];

  switch (actions.type) {
    case toDoActionTypes.LOAD_TODOS:
      return state;
    case toDoActionTypes.LOAD_CARD:
      selectedCard = state.cards.filter((card) => card.name === actions.data);
      return { ...state, card: selectedCard[0] };
    default:
      return state;
  }
}
