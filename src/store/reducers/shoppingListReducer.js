import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QUANTITY,
  CLEAR_CART,
} from '../actions/actionTypes';

const initialState = {
  cart: [],
  totalPrice: 0,
};

// Helper function to calculate total price
const calculateTotal = cart =>
  cart.reduce((total, item) => {
    const price = Number(item.discountPrice.replace('₺', '').replace(',', '.'));
    return total + price * item.qty;
  }, 0);

const shoppingListReducer = (state = initialState, action) => {
  let newCart; // We'll use this to hold the new cart state

  switch (action.type) {
    case ADD_TO_CART: {
      const inCart = state.cart.some(item => item.id === action.payload.id);
      newCart = inCart
        ? state.cart.map(item =>
            item.id === action.payload.id ? {...item, qty: item.qty + 1} : item,
          )
        : [...state.cart, {...action.payload, qty: 1}];

      return {
        ...state,
        cart: newCart,
        totalPrice: calculateTotal(newCart),
      };
    }

    case REMOVE_FROM_CART: {
      newCart = state.cart.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        cart: newCart,
        totalPrice: calculateTotal(newCart),
      };
    }

    case ADJUST_QUANTITY: {
      newCart = state.cart.map(item =>
        item.id === action.payload.id
          ? {...item, qty: +action.payload.quantity}
          : item,
      );
      return {
        ...state,
        cart: newCart,
        totalPrice: calculateTotal(newCart),
      };
    }

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};

export default shoppingListReducer;
