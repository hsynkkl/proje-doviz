import React from 'react';
import {View, Text} from 'react-native';
import styles from './HistoryRenderItem.style';

const HistoryRenderItem = ({item}) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.sellingCurrencyContainer}>
        <Text style={styles.textFlatList}>{item.sellingCurrencyTitle}</Text>
      </View>
      <View style={styles.buyingCurrencyContainer}>
        <Text style={styles.textFlatList}>{item.buyingCurrencyTitle}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.textFlatList}>{item.amountSold}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.textFlatList}>{item.processDate}</Text>
      </View>
    </View>
  );
};

export default HistoryRenderItem;
