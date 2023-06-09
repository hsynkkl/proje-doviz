import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import styles from './FavoriteWatchList.style';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import Item from '../../Components/FavoriteWatchListItem';
import {socket} from '../../Router';
const ItemFlags = ({item}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.logo} source={item.src} />
    </View>
  );
};

const FavoriteWatchList = ({navigation}) => {
  const list = useSelector(s => s.favList);
  const [showFlatList, setShowFlatList] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ratesList, setRatesList] = useState();
  const [flatListData, setFlatListData] = useState();
  const [images, setimages] = useState([
    {src: require('../../utils/imgs/1.png'), id: 1},
    {src: require('../../utils/imgs/2.png'), id: 2},
    {src: require('../../utils/imgs/3.png'), id: 3},
    {src: require('../../utils/imgs/4.png'), id: 4},
    {src: require('../../utils/imgs/5.png'), id: 5},
    {src: require('../../utils/imgs/6.png'), id: 6},
    {src: require('../../utils/imgs/7.png'), id: 7},
    {src: require('../../utils/imgs/8.png'), id: 8},
    {src: require('../../utils/imgs/9.png'), id: 9},
    {src: require('../../utils/imgs/10.png'), id: 10},
    {src: require('../../utils/imgs/11.png'), id: 11},
    {src: require('../../utils/imgs/12.png'), id: 12},
  ]);
  const [favImages, setFavImages] = useState();
  const {t, changeLanguage} = useTranslations();
  const favoriteData = [];
  let imagesData = [];
  let listData = [];
  const deneme = () => {
    if (list.fav !== undefined && ratesList !== undefined) {
    }
  };
  useEffect(() => {
    socket.on('exchange', data => {
      setRatesList(data);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (list.fav !== undefined && ratesList !== undefined) {
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
      for (let i = 0; i < list.fav.length; i++) {
        if (list.fav[i].isFavorite === true) {
          imagesData.push(images[i]);
        }
      }
      setFavImages(imagesData);
      setFlatListData(listData);
    } else {
    }
  }, [list, ratesList]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
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
            <View style={styles.thirdFlatListContainer}>
              <FlatList
                data={favImages}
                renderItem={ItemFlags}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.innerFlatListContainer}>
              <FlatList
                data={flatListData}
                renderItem={Item}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};
export default FavoriteWatchList;
