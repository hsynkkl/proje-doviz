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
import Loading from '../../Components/Loading';
import datas from './store';
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
  const {t} = useTranslations();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [ratesList, setRatesList] = useState();
  const [tempDataState, setTempDataState] = useState();
  const [images] = useState(datas);

  useEffect(() => {
    socket.on('exchange', data => {
      setRatesList(data);
      setLoading(false);
      console.log(datas);
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
    return <Loading />;
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
