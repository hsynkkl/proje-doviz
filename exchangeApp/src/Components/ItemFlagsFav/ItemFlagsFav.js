import React from 'react';
import {View, Image} from 'react-native';
import styles from './ItemFlagsFav.style';
const ItemFlags = ({item}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.logo} source={item.src} />
    </View>
  );
};
export default ItemFlags;
