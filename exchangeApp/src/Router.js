import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import io from 'socket.io-client';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import SignUpCon from './Pages/SignUpManuel';
import SignUpPhoto from './Pages/SignUpPhoto';
import SignUpLast from './Pages/SignUpLast';
import LoginSecond from './Pages/LoginSecond';
import Main from './Pages/Main';
import CustomDrawer from './Components/CustomDrawer';
import CreateAcc from './Pages/CreateAcc';
import CreateAccSecond from './Pages/CreateAccSecond';
import CreateAccThird from './Pages/CreateAccThird';
import Profile from './Pages/Profile';
import WatchList from './Pages/WatchList';
import FavoriteWatchList from './Pages/FavoriteWatchList';
import BuySell from './Pages/BuySell';
import TranslationsProvider from './Translation/TranslationProvider';
import UserProvider from './context/Provider.js';
import History from './Pages/History';
import AccountsPage from './Pages/AccountsPage';

import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export const socket = io('http://10.7.87.200:3000');
socket.on('connect', () => {
  console.log('socket connected');
});

const Router = () => {
  function CreateAccStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="CreateAccPage"
          component={CreateAcc}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccSecondPage"
          component={CreateAccSecond}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccThirdPage"
          component={CreateAccThird}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
  function WatchListStack() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name == 'Döviz Listesi') {
              iconName = focused ? 'list' : 'list';
              size = focused ? size + 11 : size + 5;
            } else if (route.name == 'Favori Döviz Listesi') {
              iconName = focused ? 'add-to-list' : 'add-to-list';
              size = focused ? size + 11 : size + 5;
            }
            return <Entypo name={iconName} size={size} colour={colour} />;
          },
          tabBarStyle: {
            backgroundColor: '#FEB700',
          },
          tabBarLabelStyle: {
            color: '#ffffff',
          },
        })}>
        <Tab.Screen name="Döviz Listesi" component={WatchList} />
        <Tab.Screen name="Favori Döviz Listesi" component={FavoriteWatchList} />
      </Tab.Navigator>
    );
  }
  function ProfileStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="ProfilePage"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
  function Root() {
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Anasayfa"
          component={Main}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Hesap Oluştur"
          component={CreateAccStack}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Profil"
          component={ProfileStack}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Döviz Ekranı"
          component={WatchListStack}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Alım - Satım"
          component={BuySell}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="İşlem Geçmişi"
          component={History}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Hesaplarım"
          component={AccountsPage}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <TranslationsProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginPage" component={Login} />
            <Stack.Screen name="SignUpPage" component={SignUp} />
            <Stack.Screen name="SignUpManuelPage" component={SignUpCon} />
            <Stack.Screen name="SignUpPhotoPage" component={SignUpPhoto} />
            <Stack.Screen name="SignUpLastPage" component={SignUpLast} />
            <Stack.Screen name="LoginSecondPage" component={LoginSecond} />
            <Stack.Screen name="RootPage" component={Root} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </TranslationsProvider>
  );
};

export default Router;
