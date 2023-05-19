import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './Button.style';
const Button = ({
  text,
  onPress,
  colorButton,
  colorText,
  width,
  height,
  borderRadius,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.innerContainer,
          {
            borderRadius: borderRadius || 30,
            backgroundColor: colorButton || 'white',
            width: width || 327,
            height: height || 48,
          },
        ]}
        onPress={onPress}>
        <Text style={[styles.text, {color: colorText || 'black'}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
