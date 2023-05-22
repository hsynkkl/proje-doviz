import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './OpenDrawerButton.style';
import AntDesign from 'react-native-vector-icons/Entypo';

const OpenDrawerButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
      <Text>
        <AntDesign name="menu" size={45} color={'#8d6e63'} />
      </Text>
      {/* <Text style={styles.text}></Text> */}
    </TouchableOpacity>
  );
};
export default OpenDrawerButton;
