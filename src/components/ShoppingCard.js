import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you have this installed
import Colors from '../theme/Colors';
import {adjustQuantity, removeFromCart} from '../store/actions/shoppingActions';

const ShoppingCard = () => {
  const cart = useSelector(state => state.shoppingList.cart);
  const dispatch = useDispatch();

  const handleAddToCart = id => {
    const item = cart.find(item => item.id === id);
    dispatch(adjustQuantity(id, item.qty + 1));
  };
  const handleRemoveFromCart = id => {
    dispatch(removeFromCart(id));
  };
  const handleReduceQuantity = id => {
    const item = cart.find(item => item.id === id);

    // Check if the item's quantity is greater than 1
    if (item.qty > 1) {
      // If so, dispatch adjustQuantity to reduce the item's quantity by 1
      dispatch(adjustQuantity(id, item.qty - 1));
    } else {
      // If the item's quantity is 1, dispatch removeFromCart to remove the item entirely
      dispatch(removeFromCart(id));
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.cardHeader}>
        <View style={styles.sellerContainer}>
          <Text style={styles.sellerName}>{item.seller}</Text>
          <Icon
            name="star"
            style={styles.starIcon}
            size={16}
            color={Colors.orange}
          />
          <Text style={styles.ratingText}>{item.sellerRating}</Text>
        </View>
        <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
          <Icon name="delete" size={24} color={Colors.red} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={item.image} style={styles.itemImage} />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.weight}>{item.weight}</Text>
          <View style={styles.bottomWrapper}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleReduceQuantity(item.id)}>
                <Icon name="minus" size={20} color={Colors.orange} />
              </TouchableOpacity>
              <Text style={styles.qty}>{item.qty}</Text>
              <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
                <Icon name="plus" size={20} color={Colors.orange} />
              </TouchableOpacity>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.originalPrice}</Text>
              <Text style={styles.discountPrice}>{item.discountPrice}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={cart}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    padding: 8,
    marginBottom: 8,
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderTopColor: Colors.textLight,
    borderBottomColor: Colors.textLight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentWrapper: {
    flexDirection: 'row',
    padding: 20,
  },
  sellerName: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 8,
  },
  sellerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    color: Colors.orange,
  },
  starIcon: {
    marginLeft: 8,
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemImage: {
    width: 75,
    height: 75,
  },
  imageWrapper: {
    borderRadius: 8,
    borderWidth: 0.7,
    padding: 8,
    borderColor: Colors.textLight,
  },
  itemDetails: {
    marginLeft: 10,
    flex: 1,
  },
  weight: {
    marginTop: 8,
  },
  qty: {
    backgroundColor: Colors.lightYellow,
    padding: 2,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    color: Colors.orange,
    borderRadius: 20,
  },
  title: {
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.7,
    borderColor: Colors.textLight,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 8,
  },
  price: {
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontWeight: 'bold',
    color: Colors.orange,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
});

export default ShoppingCard;
