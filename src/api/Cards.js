import { request } from './Client';

export function getCards() {
  return request('get', 'cards');
}

export function searchCards({ name }) {
  return request('get', 'cards/search', { name });
}
