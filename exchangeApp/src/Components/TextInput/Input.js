import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input.style';

function Input({
  placeHolder,
  value,
  width,
  onType,
  onPressIn,
  backgroundColor,
  keyboardType,
  secureTextEntry,
  maxLength,
}) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.input_container,
          {
            width: width || 330,
            backgroundColor: backgroundColor || 'rgba(255, 255, 255, 0.2)',
          },
        ]}>
        <TextInput
          placeholder={placeHolder}
          value={value}
          onChangeText={onType}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onPressIn={onPressIn}
          maxLength={maxLength}
        />
      </View>
    </View>
  );
}

export default Input;
