import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // or any other icon library
import {
  MainMenuScreen,
  ShoppingScreen,
  AssistantScreen,
  CategoryScreen,
} from './src/screens';
import CustomTabBar from './src/components/CustomButton';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'MainMenu') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Shopping') {
      iconName = focused ? 'cart' : 'cart-outline';
    } else if (route.name === 'Categories') {
      iconName = focused ? 'grid' : 'grid-outline';
    } else if (route.name === 'Assistant') {
      iconName = focused ? 'help-buoy' : 'help-buoy-outline';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'orange', // Active icon color
  tabBarInactiveTintColor: 'gray', // Inactive icon color
  tabBarLabelStyle: {paddingBottom: 5, fontSize: 12},
  tabBarStyle: {paddingBottom: 10, height: 70, paddingLeft: 70},
  headerShown: false,
});

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="MainMenu"
          component={MainMenuScreen}
          options={{tabBarLabel: 'Ana Sayfa'}}
        />
        <Tab.Screen
          name="Categories"
          component={CategoryScreen}
          options={{tabBarLabel: 'Kategoriler'}}
        />
        <Tab.Screen
          name="Shopping"
          component={ShoppingScreen}
          options={{tabBarLabel: 'Sepet'}} // buraya daha sonra reduxtaki totalPrice değeri eklenecek dispatch edilip çağırılırken
        />
        <Tab.Screen
          name="Assistant"
          component={AssistantScreen}
          options={{tabBarLabel: 'Asistan'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
