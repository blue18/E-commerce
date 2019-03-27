import { ADD_ITEM } from './types';
import { SHOW_ITEM } from '../actions/types';


export const showProducts = event => dispatch => {
  dispatch({
    type: SHOW_ITEM
  });
};

export const addToCart = event => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: event.target
  });
};