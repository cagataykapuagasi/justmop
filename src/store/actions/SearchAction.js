import {
  SEARCH_CARDS,
  SEARCH_CARDS_SUCCESS,
  SEARCH_CARDS_FAILURE,
  SEARCH_CARDS_UNMOUNT,
} from '../types';
import { Cards } from '~/api';

export const searchCards = ({ name }) => {
  return dispatch => {
    dispatch({ type: SEARCH_CARDS, payload: name });

    return Cards.searchCards({ name })
      .then(res => dispatch({ type: SEARCH_CARDS_SUCCESS, payload: res }))
      .catch(err => dispatch({ type: SEARCH_CARDS_FAILURE }));
  };
};

export const searchUnMount = () => ({
  type: SEARCH_CARDS_UNMOUNT,
});
