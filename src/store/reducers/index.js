import { combineReducers } from 'redux';
import CardReducer from './CardReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  cardState: CardReducer,
  searchState: SearchReducer,
});
