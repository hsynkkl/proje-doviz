import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Switch,
  SafeAreaView,
} from 'react-native';
import styles from './WatchList.style';
import LinearGradient from 'react-native-linear-gradient';
import Line from '../../Components/Line';
import {socket} from '../../Router';
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
let Data = [
  {id: 1, name: 'USD', isFavorite: false},
  {id: 2, name: 'EUR', isFavorite: false},
  {id: 3, name: 'AUD', isFavorite: false},
  {id: 4, name: 'CAD', isFavorite: false},
  {id: 5, name: 'GBP', isFavorite: false},
  {id: 6, name: 'JPY', isFavorite: false},
  {id: 7, name: 'NOK', isFavorite: false},
  {id: 8, name: 'SEK', isFavorite: false},
  {id: 9, name: 'DKK', isFavorite: false},
  {id: 10, name: 'SAR', isFavorite: false},
  {id: 11, name: 'RUB', isFavorite: false},
  {id: 12, name: 'RON', isFavorite: false},
];
const Item = ({item}) => (
  <SafeAreaView>
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Text>
          <FontAwesome name="exchange" size={30} />
        </Text>
      </View>
      <View style={styles.itemInnerLeftContainer}>
        <Text style={styles.itemTitle}>{item.id}</Text>
        <Text style={styles.innerItemTitle}>{item.name}</Text>
      </View>
      <View style={styles.itemInnerRightContainer}>
        <Text style={styles.itemPurchasePrice}>{item.sellPrice}</Text>
        <Text style={styles.itemBuyingPrice}>{item.buyPrice}</Text>
      </View>
    </View>
    <Line></Line>
  </SafeAreaView>
);
const ItemSwitch = ({item, index}) => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          //marginLeft: '-14%',
          paddingRight: '25%',

          marginBottom: '33.18%',
          //backgroundColor: 'gray',
        }}>
        <Switch
          onValueChange={value => setSwitchValue(value, index)}
          value={item.isFavorite}
        />
      </View>
    </View>
  );
};
const WatchList = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [ratesList, setRatesList] = useState();
  const [tempDataState, setTempDataState] = useState();
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
