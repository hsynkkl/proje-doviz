import React from 'react';
import {Text, View} from 'react-native';
import styles from './Line.style';
const Line = ({paddingTop, paddingLeft, paddingRight}) => {
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: paddingTop || 5,
          paddingLeft: paddingLeft || 0,
          paddingRight: paddingRight || 0,
        },
      ]}>
      <View style={styles.innerContainer} />
    </View>
  );
};

export default Line;
