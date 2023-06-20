import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './CreateAcc.style';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../Components/Button';
import accType from '../../utils/datas/accountType.json';
import currencyType from '../../utils/datas/currencyType.json';
import useTranslations from '../../Translation/useTranslations';
import {useDispatch} from 'react-redux';
import RenderAcc from '../../Components/RenderAcc';

const CreateAcc = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();
  const dispatch = useDispatch();

  const [selectedIdExchange, setSelectedIdExchange] = useState();
  const [selectedTitleExchange, setSelectedTitleExchange] = useState();
  const [selectedIdAcc, setSelectedIdAcc] = useState();
  const [selectedTitleAcc, setSelectedTitleAcc] = useState();

  function goToCreateAccSecond() {
    navigation.navigate('CreateAccSecondPage', {
      exchangeType: [selectedIdExchange, selectedTitleExchange],
      accType: [selectedIdAcc, selectedTitleAcc],
    });
    handleAddFav();
    setSelectedIdAcc();
    setSelectedTitleAcc();
    setSelectedTitleExchange;
    setSelectedIdExchange();
  }
  const handleAddFav = () => {
    const accTypeDatas = [
      selectedIdExchange,
      selectedTitleExchange,
      selectedIdAcc,
      selectedTitleAcc,
    ];
    dispatch({type: 'SET_ACCTYPES', payload: {accTypesDatas: accTypeDatas}});
  };
  const renderItemAcc = ({item, item2}) => {
    const backgroundColor = item.id === selectedIdAcc ? 'gray' : 'white';
    const color = item.id === selectedIdAcc ? 'white' : 'black';
    return (
      <RenderAcc
        item={item}
        onPress={() => {
          setSelectedIdAcc(item.id);
          setSelectedTitleAcc(item.title);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedIdExchange ? 'gray' : 'white';
    const color = item.id === selectedIdExchange ? 'white' : 'black';
    return (
      <RenderAcc
        item={item}
        onPress={() => {
          setSelectedIdExchange(item.id);
          setSelectedTitleExchange(item.title);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
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
          <View style={styles.innerContainer}>
            <View>
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>{t.createAccountTitle}</Text>
              </View>
              <View style={styles.flatListContainer}>
                <FlatList
                  data={accType}
                  renderItem={renderItemAcc}
                  keyExtractor={item => item.id}
                  horizontal={false}
                  numColumns={2}
                  extraData={selectedIdAcc}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textTitle}>
                  {t.createAccountTitleUnder}
                </Text>
              </View>
              <View style={styles.flatListContainer}>
                <FlatList
                  data={currencyType}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  extraData={selectedIdExchange}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text={t.continue}
                borderRadius={14}
                onPress={goToCreateAccSecond}
                colorText={'#5A6CF3'}
                width={270}
                height={44}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default CreateAcc;
