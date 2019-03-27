import { combineReducers } from 'redux';
import promoCodeReducer from './promoCodeReducer';
import shoppingCartReducer from './shoppingCartReducer';

export default combineReducers({
  promoCode: promoCodeReducer,
  shoppingCart: shoppingCartReducer
});