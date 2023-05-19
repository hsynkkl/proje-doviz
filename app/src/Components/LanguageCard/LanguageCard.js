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
  const deneme = () => {
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
    console.log(selectedId);
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
          onPress={deneme}
          style={styles.touchableOpacityContainer}>
          <Text>{t.select}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageCard;
/*import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App; */
