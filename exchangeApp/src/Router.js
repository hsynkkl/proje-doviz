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
import useTranslations from './Translation/useTranslations';

import UserProvider from './context/Provider.js';
import History from './Pages/History';
import AccountsPage from './Pages/AccountsPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export const socket = io('http://192.168.43.19:3000');
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
    const {t, changeLanguage} = useTranslations();

    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name == 'Döviz Listesi') {
              iconName = focused
                ? 'format-list-bulleted'
                : 'format-list-bulleted';
              size = focused ? size + 15 : size + 5;
            } else if (route.name == 'Favoriler') {
              iconName = focused ? 'favorite' : 'favorite';
              size = focused ? size + 15 : size + 5;
            }
            return (
              <MaterialIcons name={iconName} size={size} colour={colour} />
            );
          },
          tabBarStyle: {
            backgroundColor: '#FEB700',
          },
          tabBarLabelStyle: {
            color: '#ffffff',
          },
        })}>
        <Tab.Screen
          name="Döviz Listesi"
          component={WatchList}
          options={{
            tabBarLabel: t.tabBarWatchListPage,
          }}
        />
        <Tab.Screen
          name="Favoriler"
          component={FavoriteWatchList}
          options={{
            tabBarLabel: t.tabBarFavListPage,
          }}
        />
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
    const {t, changeLanguage} = useTranslations();
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#ffd180',
          drawerActiveTintColor: '#8d6e63',
          drawerInactiveBackgroundColor: '#FEB700',
          drawerInactiveTintColor: '#3e2723',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="Anasayfa"
          component={Main}
          options={{
            drawerLabel: t.drawerMainPage,
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Hesap Oluştur"
          component={CreateAccStack}
          options={{
            drawerLabel: t.drawerCreateAccPage,

            drawerIcon: ({color}) => (
              <Ionicons name="create-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profil"
          component={ProfileStack}
          options={{
            drawerLabel: t.drawerProfilePage,

            drawerIcon: ({color}) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Döviz Ekranı"
          component={WatchListStack}
          options={{
            drawerLabel: t.drawerWatchListPage,

            drawerIcon: ({color}) => (
              <Ionicons name="list-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Alım - Satım"
          component={BuySell}
          options={{
            drawerLabel: t.drawerBuySellPage,

            drawerIcon: ({color}) => (
              <AntDesign name="swap" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="İşlem Geçmişi"
          component={History}
          options={{
            drawerLabel: t.drawerHistoryPage,

            drawerIcon: ({color}) => (
              <Ionicons name="timer-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Hesaplarım"
          component={AccountsPage}
          options={{
            drawerLabel: t.drawerAccPage,

            drawerIcon: ({color}) => (
              <MaterialCommunityIcons
                name="bank-outline"
                size={22}
                color={color}
              />
            ),
          }}
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
