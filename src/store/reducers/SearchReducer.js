import {
  SEARCH_CARDS_SUCCESS,
  SEARCH_CARDS,
  SEARCH_CARDS_FAILURE,
  SEARCH_CARDS_UNMOUNT,
} from '../types';

const INITIAL_STATE = {
  searchedCards: [],
  loadingSearch: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_CARDS:
      return {
        ...INITIAL_STATE,
        loadingSearch: true,
      };
    case SEARCH_CARDS_SUCCESS:
      return {
        ...INITIAL_STATE,
        searchedCards: action.payload,
        loadingSearch: false,
      };
    case SEARCH_CARDS_FAILURE:
      return { ...INITIAL_STATE, loadingSearch: false };
    case SEARCH_CARDS_UNMOUNT:
      return { loadingSearch: false, searchedCards: [] };
    default:
      return state;
  }
};
