import React from 'react';
import {View, Text} from 'react-native';
import Line from '../Line';
import styles from './WatchListItem.style';
const Item = ({item}) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        <View style={styles.itemInnerLeftContainer}>
          <Text style={styles.itemTitle}>{item.id}</Text>
          <Text style={styles.innerItemTitle}>{item.name}</Text>
        </View>
        <View style={styles.itemInnerRightContainer}>
          <Text style={styles.itemPurchasePrice}>{item.sellPrice}</Text>
          <Text style={styles.itemBuyingPrice}>{item.buyPrice}</Text>
        </View>
      </View>
      <Line></Line>
    </View>
  );
};
export default Item;
