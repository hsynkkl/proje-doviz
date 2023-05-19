import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './FavoriteWatchList.style';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import Item from '../../Components/FavoriteWatchListItem';

const FavoriteWatchList = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();

  const list = useSelector(s => s.favList);
  const flatListData = [];
  list.forEach(data => {
    for (let index = 0; index < data.length; index++) {
      if (data[index].isFavorite == true) {
        if (
          flatListData.find(item => item.id == data[index].id) === undefined
        ) {
          flatListData.push(data[index]);
        }
      }
    }
  });

  return (
    <View style={styles.containerLinear}>
      <LinearGradient
        colors={['#141414', '#FEB700']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t.favCurrencyRates}</Text>
        </View>
        <View>
          <FlatList
            data={flatListData}
            renderItem={Item}
            keyExtractor={item => item.id}
          />
        </View>
      </LinearGradient>
    </View>
  );
};
export default FavoriteWatchList;
