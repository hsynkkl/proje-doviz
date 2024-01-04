import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './FilterCard.style';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import datas from '../../utils/datas/filterCard.json';
import useTranslations from '../../Translation/useTranslations';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);
const FilterCard = ({}) => {
  const {t, changeLanguage} = useTranslations();

  const dispatch = useDispatch();
  const [sellingSelectedId, setSellingSelectedId] = useState();
  const [buyingSelectedId, setBuyingSelectedId] = useState();
  const [showTheSellingItem, setShowTheSellingItem] = useState(false);
  const [showTheBuyingItem, setShowTheBuyingItem] = useState(false);

  const buyingItem = () => {
    setShowTheBuyingItem(!showTheBuyingItem);
  };
  const sellingItem = () => {
    setShowTheSellingItem(!showTheSellingItem);
  };

  const renderSellingItem = ({item}) => {
    const backgroundColor =
      item.id === sellingSelectedId
        ? 'rgba(235, 87, 87, 0.75)'
        : 'rgba(255,255,255,0)';
    const color =
      item.id === sellingSelectedId
        ? 'rgba(0,0,0,1)'
        : 'rgba(255,255,255,0.65)';

    return (
      <Item
        item={item}
        onPress={() => setSellingSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  const renderBuyingItem = ({item}) => {
    const backgroundColor =
      item.id === buyingSelectedId
        ? 'rgba(235, 87, 87, 0.75)'
        : 'rgba(255,255,255,0)';
    const color =
      item.id === buyingSelectedId ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,0.65)';
    return (
      <Item
        item={item}
        onPress={() => setBuyingSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const filterSelectedd = () => {
    const selectedItems = [sellingSelectedId, buyingSelectedId];
    dispatch({
      type: 'SET_FILTER_SELECTED',
      payload: {filterSelected: selectedItems},
    });
  };
  const cleanSelected = () => {
    setSellingSelectedId();
    setBuyingSelectedId();
    const selectedItems = [undefined, undefined];

    dispatch({
      type: 'SET_FILTER_SELECTED',
      payload: {filterSelected: selectedItems},
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerTopContainer}>
        <View style={styles.upperContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.buttonContainer}>
              <Button
                text={t.currencySold}
                width={'100%'}
                height={22}
                onPress={sellingItem}
                colorText={'black'}
                borderRadius={5}
                colorButton={'rgba(0, 0, 0, 0)'}
              />
            </View>
            <View style={styles.flatListContainer}>
              {showTheSellingItem && (
                <FlatList
                  data={datas}
                  renderItem={renderSellingItem}
                  keyExtractor={item => item.id}
                  extraData={sellingSelectedId}
                />
              )}
            </View>
          </View>
          <View style={styles.innerContainer}>
            <View style={styles.buttonContainer}>
              <Button
                text={t.currencyReceived}
                width={'100%'}
                height={22}
                onPress={buyingItem}
                colorText={'black'}
                borderRadius={5}
                colorButton={'rgba(0, 0, 0, 0)'}
              />
            </View>
            <View style={styles.flatListContainer}>
              {showTheBuyingItem && (
                <FlatList
                  data={datas}
                  renderItem={renderBuyingItem}
                  keyExtractor={item => item.id}
                  extraData={buyingSelectedId}
                />
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.underContainer}>
        <Button
          text={t.select}
          height={'50%'}
          width={150}
          onPress={filterSelectedd}
          borderRadius={10}
          colorButton={'#FCD779'}
          colorText={'#272A32'}
        />
        <Button
          text={t.clean}
          height={'50%'}
          width={150}
          onPress={cleanSelected}
          borderRadius={10}
          colorButton={'#FCD779'}
          colorText={'#272A32'}
        />
      </View>
    </View>
  );
};

export default FilterCard;
