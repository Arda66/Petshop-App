import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../theme/Colors';
import Announcement from '../../components/Announcement';
import {AnnouncementData, PopularData} from '../../assets/data';
import PopularItem from '../../components/PopularItem';
const MainMenu = () => {
  const [searchText, setSearchText] = useState('');

  const renderAnnouncements = ({item}) => {
    return <Announcement key={item.id} title={item.title} image={item.image} />;
  };

  const renderPopularItem = ({item}) => {
    return <PopularItem key={item.id} title={item.title} image={item.image} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
        {/* Top Part */}
        <View style={styles.topContainer}>
          <Text style={styles.titleText}>pawder</Text>
          <View style={styles.topLeftWrapper}>
            <Icon name="bell-badge-outline" color="black" size={32} />
            <Image
              style={styles.image}
              source={require('../../assets/images/profile.png')}
            />
          </View>
        </View>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Icon
            name="magnify"
            size={32}
            color={Colors.orange}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={'gray'}
            placeholder="Neye ihtiyacın var?"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        {/* Announcements */}
        <FlatList
          horizontal={true}
          data={AnnouncementData}
          keyExtractor={item => item.id}
          renderItem={renderAnnouncements}
          showsHorizontalScrollIndicator={false}
        />
        {/* Popular */}
        <Text style={styles.popularTitle}>Popüler</Text>
        <FlatList
          horizontal={true}
          data={PopularData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PopularItem
              title={item.title}
              image={item.image}
              rating={item.rating}
              originalPrice={item.originalPrice}
              discountPrice={item.discountPrice}
              weight={item.weight}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    color: Colors.orange,
    fontSize: 28,
    fontWeight: 'bold',
  },
  topContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    marginLeft: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 24,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10, // Adjust as needed for space between icon and text input
    borderWidth: 0, // Remove border as the container now has it
    color: 'black',
  },
  searchIcon: {
    marginLeft: 10, // Adjust as needed for padding from the left edge
  },
  popularTitle: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
    marginLeft: 24,
  },
});
