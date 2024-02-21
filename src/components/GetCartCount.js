import {useSelector} from 'react-redux';

const getCartCount = () => {
  const cartItems = useSelector(state => state.shoppingList.cart);
  const cartCount = cartItems.reduce((count, item) => count + item.qty, 0);
  return cartCount > 0 ? cartCount.toString() : undefined;
};

export default getCartCount;
