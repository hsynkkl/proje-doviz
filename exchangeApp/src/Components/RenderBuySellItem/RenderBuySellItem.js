import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './RenderBuySellItem.style';
const RenderBuySellItem = ({item, onPress, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>
        {item.currencyTypeText}
      </Text>
    </TouchableOpacity>
  );
};

export default RenderBuySellItem;
