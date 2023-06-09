import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './CreateAccSecond.style';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../Components/Button';
import departmants from '../../utils/datas/departmants.json';
import useTranslations from '../../Translation/useTranslations';
import {useSelector} from 'react-redux';
import RenderAcc from '../../Components/RenderAcc';

const CreateAccSecond = ({navigation, route}) => {
  const {t, changeLanguage} = useTranslations();
  const accTypeDatas = useSelector(s => s.accTypesDatasList);

  const [selectedIdDep, setSelectedIdDep] = useState();
  const [selectedTitleDep, setSelectedTitleDep] = useState();

  function goToCreateAccThird() {
    navigation.navigate('CreateAccThirdPage', {
      accTypeDatas: accTypeDatas,
      departmant: [selectedIdDep, selectedTitleDep],
    });

    setSelectedIdDep();
  }
  const renderItemAcc = ({item}) => {
    const backgroundColor = item.id === selectedIdDep ? 'gray' : 'white';
    const color = item.id === selectedIdDep ? 'white' : 'black';
    return (
      <RenderAcc
        item={item}
        onPress={() => {
          setSelectedIdDep(item.id);
          setSelectedTitleDep(item.title);
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
                <Text style={styles.textTitle}>
                  {t.createAccountSecondTitle}
                </Text>
              </View>
              <View style={styles.flatListContainer}>
                <FlatList
                  data={departmants}
                  renderItem={renderItemAcc}
                  keyExtractor={item => item.id}
                  extraData={selectedIdDep}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text={t.continue}
                borderRadius={14}
                onPress={goToCreateAccThird}
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
export default CreateAccSecond;
