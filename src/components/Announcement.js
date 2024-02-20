import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../theme/Colors';

const {width: screenWidth} = Dimensions.get('window');
const Announcement = ({title = '', image = null}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/announcement-background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{title}</Text>
          {image && (
            <View style={styles.imageWrapper}>
              <Image source={image} style={styles.image} />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: screenWidth - 32, // Adjust container width to fit within screen bounds with some padding
    padding: 10, // Padding around the content
    borderRadius: 24, // Rounded corners
    marginVertical: 10, // Margin top and bottom for spacing
    elevation: 5, // Shadow for Android
    shadowColor: 'gray', // Shadow color for iOS
    shadowOffset: {width: 0, height: 3}, // Shadow offset for iOS
    shadowOpacity: 0.23, // Shadow opacity for iOS
    shadowRadius: 2.62, // Shadow radius for iOS
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 24,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    width: '75%',
    fontSize: 20,
  },
  backgroundImage: {
    flex: 1,
    paddingVertical: 48,
  },
  imageWrapper: {
    backgroundColor: Colors.darkOrange,
    padding: 8,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: Colors.white,
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 24,
  },
});
