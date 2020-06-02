import {
  FETCHING_CARDS,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  SEARCH_CARDS,
  SEARCH_CARDS_SUCCESS,
  SEARCH_CARDS_FAILURE,
} from '../types';
import { Cards } from '~/api';

const getCardSuccess = data => {
  const flattedData = Object.values(data).flat();
  const filteredData = flattedData.filter(
    item => item.mechanics && item.mechanics.length && item
  );
  const mechanics = filteredData
    .map(({ mechanics }) => mechanics.map(i => i.name))
    .flat();
  console.log('mechanics', mechanics);
  const uniqueMechanics = [...new Set(mechanics)].map(mechanic => ({
    mechanic,
    cards: [],
  }));

  filteredData.forEach(item => {
    uniqueMechanics.forEach(({ mechanic }, index) => {
      if (item.mechanics.find(({ name }) => name === mechanic)) {
        uniqueMechanics[index].cards.push(item);
      }
    });
  });

  console.log('mec', uniqueMechanics);

  return {
    type: FETCH_CARDS_SUCCESS,
    mechanics: uniqueMechanics,
    payload: filteredData,
  };
};

export const fetchCards = () => {
  return dispatch => {
    dispatch({ type: FETCHING_CARDS });

    return Cards.getCards()
      .then(res => dispatch(getCardSuccess(res)))
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
