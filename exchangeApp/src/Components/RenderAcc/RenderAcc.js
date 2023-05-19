import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './RenderAcc.style';
const RenderAcc = ({item, onPress, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemDeneme, {backgroundColor}]}>
      <Text style={[styles.titleDeneme, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default RenderAcc;
