import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './AmountInput.style';
const AmountInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={props.onSearch}
        keyboardType={'number-pad'}
        placeHolder={''}
        backgroundColor={'rgba(255, 255, 255, 0.051)'}
        width={50}
        onChange={props.onChange}
      />
    </View>
  );
};
export default AmountInput;
