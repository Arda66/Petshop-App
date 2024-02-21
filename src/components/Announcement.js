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
    width: screenWidth - 32,
    padding: 10,
    borderRadius: 24,
    marginVertical: 10,
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
