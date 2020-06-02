import { CARD_GET, CARD_SEARCH } from '../types';
import { Cards } from '~/api';

export const getCards = () => {
  Cards.getCards()
    .then(res => console.log('tüm cartlar', res))
    .catch(e => console.log(e));
};

export const searchCards = ({ name }) => {
  Cards.searchCards({ name })
    .then(res => console.log('arama sonucu', res))
    .catch(e => console.log(e));
};
