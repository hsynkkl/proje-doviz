import React, {useEffect, useState} from 'react';
import {View, Text, Alert, Image, FlatList} from 'react-native';
import styles from './History.style';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import filteringHistory from '../../utils/Functions/dbFunctions/processHistoryDB/filteringHistory';
import Button from '../../Components/Button';
import FilterCard from '../../Components/FilterCard';
import HistoryRenderItem from '../../Components/HistoryRenderItem';
import useTranslations from '../../Translation/useTranslations';
import TitleOfPage from '../../Components/TitleOfPages';
import EmptyResultCard from '../../Components/EmptyResultCard';
const History = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();
  const userId = useSelector(s => s.userIdList);
  const selectedItems = useSelector(a => a.filterSelectedList);
  const [showTheThingUnder, setShowTheThingUnder] = useState(false);
  const [flatListData, setFlatListData] = useState();
  const [showTheFilterCard, setShowTheFilterCard] = useState(false);
  const [nameOfButtonFilter, setNameOfButtonFilter] = useState(t.filter);
  const [showEmptyCard, setShowEmptyCard] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setFlatListData(await filteringHistory(userId, selectedItems));
      setShowTheThingUnder(true);
    };
    fetchData();
  }, []);
  const filtering = async () => {
    setShowTheFilterCard(!showTheFilterCard);
    if (nameOfButtonFilter === t.filter) {
      setNameOfButtonFilter(t.hide);
    } else {
      setNameOfButtonFilter(t.filter);
    }
  };
  const getData = async () => {
    setFlatListData(await filteringHistory(userId, selectedItems));
    const length = await filteringHistory(userId, selectedItems);
    if (length.length === 0) {
      setShowEmptyCard(true);
    } else {
      setShowEmptyCard(false);
    }
    setShowTheThingUnder(true);
  };

  const renderItem = ({item}) => {
    return <HistoryRenderItem item={item} />;
  };
  return (
    <View style={styles.containerLinear}>
      <LinearGradient
        colors={['#FEB700', '#F30000']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../utils/imgs/logo.png')}
            />
          </View>

          <View style={styles.titleOfPageContainer}>
            <TitleOfPage title={t.historyScreen}></TitleOfPage>
          </View>
          <View style={styles.historyContainer}>
            <View style={styles.titleContainer}>
              <View style={styles.sellingCurrencyContainer}>
                <Text style={styles.textTitle}>{t.currencySold}</Text>
              </View>
              <View style={styles.buyingCurrencyContainer}>
                <Text style={styles.textTitle}>{t.currencyReceived}</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.textTitle}>{t.amount}</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.textTitle}>{t.date}</Text>
              </View>
            </View>
            <View style={{height: 255}}>
              {showEmptyCard && <EmptyResultCard text={t.empty} />}
              {showTheThingUnder && (
                <FlatList
                  data={flatListData}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              )}
            </View>
          </View>

          <View style={{height: 275}}>
            {showTheFilterCard && <FilterCard />}
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text={nameOfButtonFilter}
              borderRadius={14}
              onPress={filtering}
              colorText={'black'}
              colorButton={'#FCD779'}
              width={170}
              height={44}
            />
            <Button
              text={t.show}
              borderRadius={14}
              onPress={getData}
              colorText={'black'}
              colorButton={'#FCD779'}
              width={170}
              height={44}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default History;
