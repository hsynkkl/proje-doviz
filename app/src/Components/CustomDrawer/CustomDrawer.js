import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Button from '../Button/Button';
const CustomDrawer = props => {
  const deneme = () => {
    console.log('');
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#FEB700', height: '100%'}}>
        <ImageBackground
          // source={require('../../utils/imgs/logo.png')}
          style={{padding: 15, alignItems: 'center'}}>
          <Image
            source={require('../../utils/imgs/logo.png')}
            style={{paddingLeft: 15, alignItems: 'center'}}
          />
        </ImageBackground>

        <DrawerItemList {...props} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: '70%',
          }}>
          <Button
            colorButton={'rgba(254, 183, 0,0.1)'}
            text={'Çıkış'}
            onPress={deneme}
            width={120}></Button>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
