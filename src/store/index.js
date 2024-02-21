// store.js
import {createStore, combineReducers} from 'redux';
import shoppingListReducer from './reducers/shoppingListReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
