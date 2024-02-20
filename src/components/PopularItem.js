import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../theme/Colors';
const PopularItem = ({
  title,
  image,
  rating,
  originalPrice,
  discountPrice,
  weight,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.ratingContainer}>
        <Icon name="star" size={14} color={Colors.orange} />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>{originalPrice}</Text>
        <Text style={styles.discountPrice}>{discountPrice}</Text>
      </View>
      <Text style={styles.itemName}>{title}</Text>
      <Text style={styles.itemSize}>{weight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    padding: 10,
    width: 150,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 8,
    margin: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightYellow,
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 6,
    position: 'absolute',
    top: 5,
    left: 10,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: Colors.orange,
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: Colors.orange,
    borderRadius: 50,
    padding: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  originalPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    color: '#757575',
  },
  discountPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.orange,
    marginLeft: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.darkText,
    marginTop: 5,
  },
  itemSize: {
    fontSize: 12,
    color: '#757575',
    marginTop: 3,
  },
});

export default PopularItem;
