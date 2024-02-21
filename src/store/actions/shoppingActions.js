// shoppingActions.js
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  CLEAR_CART,
} from './actionTypes';

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = itemId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjustQuantity = (itemId, quantity) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      id: itemId,
      quantity: quantity,
    },
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
