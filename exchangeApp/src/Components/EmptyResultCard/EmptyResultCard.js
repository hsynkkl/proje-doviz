import React from 'react';
import {View, Text} from 'react-native';
import styles from './EmptyResultCard.style';
const EmptyResultCard = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default EmptyResultCard;
