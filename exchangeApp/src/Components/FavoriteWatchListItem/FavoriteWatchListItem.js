import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './FavoriteWatchListItem.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Line from '../Line';
const Item = ({item}) => (
  <View>
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Text>
          <FontAwesome name="exchange" size={30} />
        </Text>
      </View>
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
