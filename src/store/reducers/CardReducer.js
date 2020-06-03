import {
  FETCH_CARDS_SUCCESS,
  FETCHING_CARDS,
  FETCH_CARDS_FAILURE,
} from '../types';

const INITIAL_STATE = {
  cards: [],
  mechanics: [],
  loadingFetch: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_CARDS:
      return { ...INITIAL_STATE, loadingFetch: true };
    case FETCH_CARDS_SUCCESS:
      return {
        ...INITIAL_STATE,
        cards: action.payload,
        mechanics: action.mechanics,
        loadingFetch: false,
      };
    case FETCH_CARDS_FAILURE:
      return { ...INITIAL_STATE, loadingFetch: false };
    default:
      return state;
  }
};
