import { request } from './Client';

export function getCards() {
  return request('get', 'auth/token');
}
