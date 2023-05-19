import React from 'react';
import {Text, View} from 'react-native';
import styles from './TitleOfPage.style';
const TitleOfPage = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TitleOfPage;
