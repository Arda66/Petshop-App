import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // or any other icon library
import Colors from '../theme/Colors';
const CustomTabBar = props => {
  return (
    <>
      <View style={styles.container}>
        {/* BottomTabBar with white background */}
        <BottomTabBar {...props} />
        {/* Custom  button */}
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => {
            props.navigation.navigate('Categories');
          }}>
          <Icon name="grid-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Safe area view to ensure bottom padding on newer devices */}
      <SafeAreaView style={styles.safeArea} />
    </>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', // Set the background color to white for the whole tab bar
  },
  customButton: {
    position: 'absolute',
    left: 10,
    top: -20,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: Colors.orange, // Background color of the floating button
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  safeArea: {
    backgroundColor: 'white', // Ensure the safe area is also white
  },
});
