import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator, Switch} from 'react-native';
import styles from './WatchList.style';
import LinearGradient from 'react-native-linear-gradient';
import {socket} from '../../Router';
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import Data from '../../utils/datas/watchListFlatListData.json';
import Item from '../../Components/WatchListItem';
import ItemFlags from '../../Components/ItemFlags';
const ItemSwitch = ({item, index}) => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          paddingRight: '25%',
          marginBottom: '33.18%',
        }}>
        <Switch
          trackColor={{true: '#FEB000', false: 'gray'}}
          thumbColor={'#FEB700'}
          onValueChange={value => setSwitchValue(value, index)}
          value={item.isFavorite}
        />
      </View>
    </View>
  );
};
const WatchList = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();
  const [deneme, setDeneme] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [ratesList, setRatesList] = useState();
  const [tempDataState, setTempDataState] = useState();
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
  useEffect(() => {
    socket.on('exchange', data => {
      setRatesList(data);
      setLoading(false);
    });
  }, []);

  if (ratesList !== undefined) {
    setSwitchValue = (val, ind) => {
      const tempData = _.clone(Data);
      tempData[ind].isFavorite = val;
      setTempDataState(tempData);
      handleAddFav();
    };
  }
  const handleAddFav = () => {
    // console.log(images);
    dispatch({type: 'CLEAN_LIST'});
    dispatch({type: 'ADD_FAVLIST', payload: {fav: tempDataState}});
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View style={styles.containerLinear}>
      <LinearGradient
        colors={['#141414', '#FEB700']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t.currencyRates}</Text>
        </View>
        <View style={styles.flatListContainer}>
          <View style={styles.thirdFlatListContainer}>
            <FlatList
              data={images}
              renderItem={ItemFlags}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.firstFlatListContainer}>
            <FlatList
              data={ratesList}
              renderItem={Item}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.secondFlatListContainer}>
            <FlatList
              data={Data}
              renderItem={ItemSwitch}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default WatchList;
