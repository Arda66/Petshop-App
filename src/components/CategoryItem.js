import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';

const CategoryItem = ({image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.itemImage} source={image} />
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.textLight,
    marginHorizontal: 8,
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
  },
  imageWrapper: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.skinColor,
  },
});
