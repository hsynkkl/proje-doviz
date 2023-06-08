import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import styles from './FavoriteWatchList.style';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import Item from '../../Components/FavoriteWatchListItem';
import {socket} from '../../Router';
const FavoriteWatchList = ({navigation}) => {
  const list = useSelector(s => s.favList);
  const [showFlatList, setShowFlatList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ratesList, setRatesList] = useState();
  const [flatListData, setFlatListData] = useState();
  const {t, changeLanguage} = useTranslations();
  const favoriteData = [];
  let listData = [];
  useEffect(() => {
    socket.on('exchange', data => {
      setRatesList(data);
    });
  }, []);
  useEffect(() => {
    if (list.fav !== undefined) {
      //setLoading(false);
      setShowFlatList(true);
      for (let i = 0; i < ratesList.length; i++) {
        if (list.fav[i].isFavorite === true) {
          favoriteData.push(list.fav[i].name);
        }
      }
      for (let i = 0; i < ratesList.length; i++) {
        for (let j = 0; j < favoriteData.length; j++) {
          if (ratesList[i].id === favoriteData[j]) {
            listData.push(ratesList[i]);
          }
        }
      }
      setFlatListData(listData);
    } else {
    }
  }, [list, ratesList]);

  // if (loading) {
  //   return <ActivityIndicator size="large" />;
  // }
  return (
    <View style={styles.containerLinear}>
      <LinearGradient
        colors={['#141414', '#FEB700']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t.favCurrencyRates}</Text>
        </View>
        {showFlatList && (
          <View style={styles.flatListContainer}>
            <FlatList
              data={flatListData}
              renderItem={Item}
              keyExtractor={item => item.id}
            />
          </View>
        )}
      </LinearGradient>
    </View>
  );
};
export default FavoriteWatchList;
