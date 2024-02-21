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
import Colors from './src/theme/Colors';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import TotalPriceTabLabel from './src/components/TotalPriceTabLabel';
import getCartCount from './src/components/GetCartCount';
const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarBadge: route.name === 'Shopping' ? getCartCount() : undefined,
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'MainMenu') {
      iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Shopping') {
      iconName = 'cart-outline';
    } else if (route.name === 'Categories') {
      iconName = focused ? 'grid' : 'grid-outline';
    } else if (route.name === 'Assistant') {
      iconName = focused ? 'help-buoy' : 'help-buoy-outline';
    }
    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: Colors.orange, // Active icon color
  tabBarInactiveTintColor: 'gray', // Inactive icon color
  tabBarLabelStyle: {paddingBottom: 5, fontSize: 12},
  tabBarStyle: {paddingBottom: 10, height: 70, paddingLeft: 70},
  headerShown: false,
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
              options={{
                tabBarLabel: () => <TotalPriceTabLabel />,
                tabBarBadgeStyle: {
                  backgroundColor: Colors.orange,
                  color: 'white',
                },
              }}
            />
            <Tab.Screen
              name="Assistant"
              component={AssistantScreen}
              options={{tabBarLabel: 'Asistan'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
