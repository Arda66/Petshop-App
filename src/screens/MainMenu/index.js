import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../theme/Colors';
import Announcement from '../../components/Announcement';
import {AnnouncementData, CategoryData, PopularData} from '../../assets/data';
import PopularItem from '../../components/PopularItem';
import CategoryItem from '../../components/CategoryItem';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/actions/shoppingActions';
import styles from './styles';

const MainMenu = () => {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch(); // This is the dispatch function you will use

  const renderAnnouncements = ({item}) => {
    return <Announcement key={item.id} title={item.title} image={item.image} />;
  };

  const renderPopularItem = ({item}) => {
    return (
      <PopularItem
        title={item.title}
        image={item.image}
        rating={item.rating}
        originalPrice={item.originalPrice}
        discountPrice={item.discountPrice}
        weight={item.weight}
        onPress={() => handleAddToCart(item)}
      />
    );
  };

  const renderCategoryItem = ({item}) => {
    return <CategoryItem image={item.image} />;
  };

  const handleAddToCart = item => {
    dispatch(addToCart(item));
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
        <View style={styles.midBottomWrapper}>
          <FlatList
            horizontal={true}
            data={AnnouncementData}
            keyExtractor={item => item.id}
            renderItem={renderAnnouncements}
            showsHorizontalScrollIndicator={false}
          />
          {/* Popular */}
          <Text style={styles.subTitle}>Popüler</Text>
          <FlatList
            horizontal={true}
            data={PopularData}
            keyExtractor={item => item.id}
            renderItem={renderPopularItem}
            showsHorizontalScrollIndicator={false}
          />
          {/* Categories */}
          <Text style={styles.subTitle}>Kategoriler</Text>
          <FlatList
            horizontal={true}
            data={CategoryData}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainMenu;
