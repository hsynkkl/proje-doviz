import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './FavoriteWatchListItem.style';
import Line from '../Line';
const Item = ({item}) => (
  <View>
    <View style={styles.itemContainer}>
      <View style={styles.itemInnerContainer}>
        <Text style={styles.itemTitle}>{item.id}</Text>
        <Text style={styles.innerItemTitle}>{item.name}</Text>
      </View>
      <View style={styles.itemDenemeContainer}>
        <Text style={styles.itemPurchasePrice}>{item.sellPrice}</Text>
        <Text style={styles.itemBuyingPrice}>{item.buyPrice}</Text>
      </View>
    </View>
    <Line></Line>
  </View>
);
export default Item;
