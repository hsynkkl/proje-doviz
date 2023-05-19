import React from 'react';
import {View, Text} from 'react-native';
import styles from './AccountCard.style';

import Line from '../Line';
import AntDesign from 'react-native-vector-icons/Ionicons';
//silinecek
const AccountCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>
          <AntDesign name="md-wallet-outline" size={130} />
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleAccountContainer}>
          <Text style={styles.itemTitle}>Şube </Text>
          <Text style={styles.itemTitle3}>{item.departmantText}</Text>
        </View>

        <View>
          <Line></Line>
        </View>
        <View style={styles.amountAccountContainer}>
          <Text style={styles.itemTitle}> Bakiye </Text>
          <Text style={styles.itemTitle2}>
            {item.balance} {item.currencyTypeText}
          </Text>
        </View>
        <View>
          <Line></Line>
        </View>
        <View style={styles.ibanAccountContainer}>
          <Text style={styles.itemTitle}>IBAN </Text>
          <Text style={styles.itemTitle2}>TR0001 0019 4691 2631 3950 01</Text>
        </View>
      </View>
    </View>
  );
};

export default AccountCard;
