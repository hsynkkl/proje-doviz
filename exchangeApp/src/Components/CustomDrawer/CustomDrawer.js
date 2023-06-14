import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import styles from './CustomDrawer.style';
import {useSelector} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import getDataFromDB from '../../utils/Functions/dbFunctions/usersDB/getDataFromDB';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => {
  const {t, changeLanguage} = useTranslations();
  const [nameSurname, setNameSurname] = useState();
  const [photo, setPhoto] = useState();
  const userId = useSelector(s => s.userIdList);
  useEffect(() => {
    async function fetchData() {
      datas = await getDataFromDB(userId);
      setNameSurname(datas[3]);
      setPhoto(datas[2]);
    }
    fetchData();
  }, [nameSurname]);
  const logOut = () => {
    console.log('çıkış yapacak');
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentContainerStyle}>
        <ImageBackground style={styles.imageBackGroundContainer}>
          <Image
            source={require('../../utils/imgs/logo.png')}
            style={styles.imageLogo}
          />
        </ImageBackground>
        <View style={styles.imageContainer}>
          <View style={styles.innerImageContainer}>
            <Image style={styles.profilePhoto} source={{uri: photo}} />
          </View>
          <View style={styles.innerTextContainer}>
            <Text style={styles.textUser}>
              {t.textDrawer} {nameSurname}
            </Text>
          </View>
        </View>

        <View style={styles.drawerItemContainer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.innerFooterContainer} onPress={logOut}>
          <View style={styles.iconContainer}>
            <Text>
              <Ionicons name="exit-outline" size={22} color={'#3e2723'} />
            </Text>
            <Text style={styles.textLogOut}>{t.textSignOut}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
