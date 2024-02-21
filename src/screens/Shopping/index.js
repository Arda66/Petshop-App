import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../theme/Colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ShoppingCard from '../../components/ShoppingCard';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, clearCart} from '../../store/actions/shoppingActions';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import {PopularData} from '../../assets/data';
import PopularItem from '../../components/PopularItem';
import styles from './styles';

const ShoppingScreen = () => {
  const totalPrice = useSelector(state => state.shoppingList.totalPrice);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all items from your cart?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(clearCart());
            ToastAndroid.show('Cart cleared!', ToastAndroid.SHORT);
          },
        },
      ],
      {cancelable: false},
    );
  };
  const handleAddToCart = item => {
    dispatch(addToCart(item));
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Top Part */}
        <View style={styles.topContainer}>
          <Text style={styles.topText}>Sepetim</Text>
          <TouchableOpacity onPress={handleClearCart}>
            <Icon name="trash" color={Colors.orange} size={22} />
          </TouchableOpacity>
        </View>
        {/* Shopping Card */}
        <ShoppingCard />
        {/* Discount Coupon */}
        <View style={styles.discountCodeWrapper}>
          <View style={styles.discountleftWrapper}>
            <FaIcon
              style={styles.percentageIcon}
              name="percentage"
              color={Colors.orange}
              size={24}
            />
            <Text style={styles.discountText}>İndirim Kodu Gir</Text>
          </View>
          <FaIcon name="chevron-right" color="gray" size={18} />
        </View>
        {/* Special For you */}
        <Text style={styles.subTitle}>Sana Özel</Text>
        <FlatList
          horizontal={true}
          data={PopularData}
          keyExtractor={item => item.id}
          renderItem={renderPopularItem}
          showsHorizontalScrollIndicator={false}
        />
        {/* Total price and Payment */}
        {totalPrice > 0 && (
          <View style={styles.paymentSection}>
            <View style={styles.paymentRightContainer}>
              <Text>Sepetin</Text>
              <View style={styles.paymentLeftContainer}>
                <Text style={styles.totalPrice}>₺{totalPrice}</Text>
                <FaIcon name="chevron-up" size={14} color={Colors.orange} />
              </View>
            </View>
            <TouchableOpacity style={styles.payment}>
              <Text style={styles.paymentText}>Ödemeye Devam et</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShoppingScreen;
