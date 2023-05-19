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
import Button from '../../Components/Button/Button';
import Line from '../../Components/Line';
import {socket} from '../../Router';
import _ from 'lodash';
import {useDispatch} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Item = ({item, index}) => (
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
      <View style={styles.starIcon}>
        <Switch
          onValueChange={value => setSwitchValue(value, index)}
          value={item.isFavorite}
        />
      </View>
    </View>
    <Line></Line>
  </SafeAreaView>
);
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
  if (ratesList != undefined) {
    setSwitchValue = (val, ind) => {
      const tempData = _.clone(ratesList);
      tempData[ind].isFavorite = val;
      setRatesList(tempData);
      setTempDataState(tempData);
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
          <FlatList
            data={ratesList}
            renderItem={Item}
            keyExtractor={item => item.id}
          />
          <View style={styles.buttonContainer}>
            <Button
              text={t.addFav}
              width={330}
              height={35}
              onPress={handleAddFav}
              colorText={'#ffffff'}
              borderRadius={14}
              colorButton={'rgba(235, 87, 87, 0.75)'}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default WatchList;
