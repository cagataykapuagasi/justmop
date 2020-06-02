import {
  FETCHING_CARDS,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  SEARCH_CARDS,
  SEARCH_CARDS_SUCCESS,
  SEARCH_CARDS_FAILURE,
} from '../types';
import { Cards } from '~/api';

export const fetchCards = () => {
  return dispatch => {
    dispatch({ type: FETCHING_CARDS });
    return Cards.getCards()
      .then(res => dispatch({ type: FETCH_CARDS_SUCCESS, payload: res }))
      .catch(err => dispatch({ type: FETCH_CARDS_FAILURE }));
  };
};

export const searchCards = ({ name }) => {
  return dispatch => {
    dispatch({ type: SEARCH_CARDS });

    return Cards.searchCards({ name })
      .then(res => dispatch({ type: SEARCH_CARDS_SUCCESS, payload: res }))
      .catch(err => dispatch({ type: SEARCH_CARDS_FAILURE }));
  };
};
