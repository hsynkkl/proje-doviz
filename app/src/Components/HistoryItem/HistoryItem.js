import React from 'react';
import {View, Text} from 'react-native';
import styles from './HistoryItem.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Line from '../Line';
const Item = ({item, index}) => (
  <View>
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Text>
          <FontAwesome name="exchange" size={30} />
        </Text>
      </View>
      <View style={styles.itemInnerLeftContainer}>
        <Text style={styles.itemTitle}>{item.id}</Text>
        <Text style={styles.innerItemTitle}>{item.name}</Text>
      </View>
      <View style={styles.itemInnerRightContainer}>
        <Text style={styles.itemPurchasePrice}>{item.sellPrice}</Text>
        <Text style={styles.itemBuyingPrice}>{item.buyPrice}</Text>
      </View>
      <View style={styles.starIcon}>
        <Switch
          onValueChange={value => setSwitchValue(value, index)}
          value={item.isFavorite}
        />
      </View>
    </View>
    <Line></Line>
  </View>
);
export default Item;
