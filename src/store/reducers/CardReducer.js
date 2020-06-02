import {
  FETCH_CARDS_SUCCESS,
  FETCHING_CARDS,
  FETCH_CARDS_FAILURE,
  SEARCH_CARDS_SUCCESS,
  SEARCH_CARDS,
  SEARCH_CARDS_FAILURE,
} from '../types';

const INITIAL_STATE = {
  cards: [],
  loadingFetch: true,
  searchedCards: [],
  loadingSearch: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_CARDS:
      return { ...INITIAL_STATE, loadingFetch: true };
    case FETCH_CARDS_SUCCESS:
      return {
        ...INITIAL_STATE,
        cards: action.payload,
        loadingFetch: false,
      };
    case FETCH_CARDS_FAILURE:
      return { ...INITIAL_STATE, loadingFetch: false };
    case SEARCH_CARDS:
      return { ...INITIAL_STATE, loadingSearch: true };
    case SEARCH_CARDS_SUCCESS:
      return {
        ...INITIAL_STATE,
        searchedCards: action.payload,
        loadingSearch: false,
      };
    case SEARCH_CARDS_FAILURE:
      return { ...INITIAL_STATE, loadingSearch: false };
    default:
      return state;
  }
};
