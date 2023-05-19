import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './LanguageCardItem.style';
const LanguageCardItem = ({item, onPress, backgroundColor, textColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    </TouchableOpacity>
  );
};
export default LanguageCardItem;
