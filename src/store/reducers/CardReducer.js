import { CARD_GET, CARD_SEARCH } from '../types';

const INITIAL_STATE = {
  cards: [],
  searchedCards: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CARD_GET:
      return { cards: actions.payload };
    case CARD_SEARCH:
      return { searchedCards: action.payload };
    default:
      return state;
  }
};
