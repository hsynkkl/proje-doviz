import React from 'react';
import {View, Text} from 'react-native';
import styles from './MainItem.style';

const MainItem = ({item}) => {
  const balance = parseInt(item.value);

  return (
    <View style={styles.container}>
      <Text style={styles.textBalance}>{balance.toFixed(3)}</Text>
      <View style={styles.innerContainer}>
        <View style={[styles.circle, {backgroundColor: item.color}]}></View>
        <Text style={styles.textTitle}>{item.name}</Text>
      </View>
    </View>
  );
};

export default MainItem;
