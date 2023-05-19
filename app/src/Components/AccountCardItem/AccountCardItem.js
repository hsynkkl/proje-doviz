import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './AccountCardItem.style';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import useTranslations from '../../Translation/useTranslations';

const AccountCardItem = ({item}) => {
  const {t, changeLanguage} = useTranslations();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>
          <AntDesign name="account-cash-outline" size={50} color={'#8d6e63'} />
        </Text>
      </View>
      <View style={styles.innertopContainer}>
        <Text style={styles.textTitle}>{t.department}</Text>
        <Text style={styles.textItem}>{item.currencyTypeText}</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 6}}>
        <Text style={styles.textTitle}>{t.balance}</Text>
        <Text style={styles.textItem}>
          {item.balance} {item.currencyTypeText}
        </Text>
      </View>
    </View>
  );
};
export default AccountCardItem;
