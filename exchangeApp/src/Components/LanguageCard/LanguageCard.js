import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './LanguageCard.style';
import useTranslations from '../../Translation/useTranslations';
import dataTR from '../../utils/datas/languageDataTR.json';
import dataENG from '../../utils/datas/languageDataENG.json';
import dataPL from '../../utils/datas/languageDataPL.json';
import Item from '../LanguageCardItem';

const LanguageCard = ({}) => {
  const {t, changeLanguage} = useTranslations();
  const [selectedId, setSelectedId] = useState();
  const [flatListData, setFlatListData] = useState(dataTR);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'gray' : 'white';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  const changeLanguageF = () => {
    if (selectedId !== undefined) {
      if (selectedId == 'tr') {
        setFlatListData(dataTR);
      } else if (selectedId == 'eng') {
        setFlatListData(dataENG);
      } else {
        setFlatListData(dataPL);
      }
      changeLanguage(selectedId);
    }
    setSelectedId();
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../../utils/imgs/language.jpg')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{t.language}</Text>
        </View>
      </View>
      <View style={styles.underContainer}>
        <FlatList
          data={flatListData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={changeLanguageF}
          style={styles.touchableOpacityContainer}>
          <Text>{t.select}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageCard;
