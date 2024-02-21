import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../theme/Colors';

const TotalPriceTabLabel = () => {
  const totalPrice = useSelector(state => state.shoppingList.totalPrice);

  return (
    <Text
      style={
        totalPrice > 0 ? styles.totalPrice : styles.noPrice
      }>{`₺${totalPrice}`}</Text>
  );
};

export default TotalPriceTabLabel;

const styles = StyleSheet.create({
  totalPrice: {
    color: Colors.orange,
    padding: 2,
    backgroundColor: Colors.lightYellow,
  },
  noPrice: {
    color: 'gray',
    paddingHorizontal: 10,
    backgroundColor: Colors.lightYellow,
  },
});
