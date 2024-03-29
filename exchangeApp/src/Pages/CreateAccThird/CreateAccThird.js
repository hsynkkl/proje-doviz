import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CreateAccThird.style';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../Components/Button';
import setAccToDb from '../../utils/Functions/dbFunctions/userAccountsDB/setAccToDB';
import useTranslations from '../../Translation/useTranslations';
import acc from '../../utils/Functions/dbFunctions/userAccountsDB/getAccFromDB';
import randomIban from '../../utils/Functions/otherFunctions/randomIban';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const CreateAccLast = ({navigation, route}) => {
  const {t, changeLanguage} = useTranslations();
  const [accTypeState, setAccTypeState] = useState();
  const [exchangeTypeState, setExchangeTypeState] = useState();
  const [departmentState, setDepartmentState] = useState();
  const userIdSelector = useSelector(s => s.userIdList);
  const userId = userIdSelector[0].userId.toString();
  const dispatch = useDispatch();

  let accType = [];
  let exchangeType = [];
  let accType2 = [];
  let exchangeType2 = [];
  let department2;

  const setValues = async () => {
    const accTypesDatas = route.params.accTypeDatas;
    department2 = route.params.departmant;
    if (accTypesDatas.length == 1) {
      exchangeType2.push(accTypesDatas[0].accTypesDatas[0]);
      exchangeType2.push(accTypesDatas[0].accTypesDatas[1]);
      accType2.push(accTypesDatas[0].accTypesDatas[2]);
      accType2.push(accTypesDatas[0].accTypesDatas[3]);
      setAccTypeState(accTypesDatas[0].accTypesDatas[3]);
      setExchangeTypeState(accTypesDatas[0].accTypesDatas[1]);
      setDepartmentState(route.params.departmant[1]);
    }
  };
  useEffect(() => {
    const accTypesDatas = route.params.accTypeDatas;

    if (accTypesDatas.length == 1) {
      exchangeType.push(accTypesDatas[0].accTypesDatas[0]);
      exchangeType.push(accTypesDatas[0].accTypesDatas[1]);
      accType.push(accTypesDatas[0].accTypesDatas[2]);
      accType.push(accTypesDatas[0].accTypesDatas[3]);
      setAccTypeState(accTypesDatas[0].accTypesDatas[3]);
      setExchangeTypeState(accTypesDatas[0].accTypesDatas[1]);
      setDepartmentState(route.params.departmant[1]);
    }
  }, []);

  let value = false;

  const gotoMainPage = async () => {
    await setValues();
    const iban = await randomIban();
    value = await setAccToDb(
      userId,
      accType2,
      exchangeType2,
      department2,
      iban,
    );
    if (value[1] === true) {
      const accs = await acc(userId);

      dispatch({type: 'SET_FLATLISTDATA', payload: {datas: accs}});
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: t.successfully,
        textBody: `Döviz cinsi: ${exchangeTypeState} 
        Şube: ${departmentState} 
        IBAN: ${iban}`,
        button: t.close,
        onHide: () => {
          navigation.navigate('CreateAccPage');
          navigation.navigate('Anasayfa');
        },
      });
    } else if (value[1] === false) {
      if (value[0] === 1) {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: t.error,
          textBody: t.alertCreateAccUnSuccesfully2,
          button: t.close,
        });
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: t.error,
          textBody: t.alertCreateAccUnsuccesfully,
          button: t.close,
        });
      }
    }
  };

  const edit = () => {
    navigation.navigate('CreateAccPage');
    dispatch({type: 'CLEAN_ACCTYPES'});
  };
  const editSecond = () => {
    navigation.navigate('CreateAccSecondPage');
    dispatch({type: 'CLEAN_ACCTYPES'});
  };
  return (
    <AlertNotificationRoot>
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
                    {t.createAccountThirdTitleFirst} {accTypeState}
                  </Text>
                  <Button
                    text={t.editButton}
                    borderRadius={14}
                    onPress={edit}
                    colorText={'#D80027'}
                    width={85}
                    height={26}
                  />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.innerTextContainer}>
                    <Text style={styles.textTitle}>
                      {t.createAccountThirdTitleSecond} {exchangeTypeState}
                    </Text>
                  </View>
                  <Button
                    text={t.editButton}
                    borderRadius={14}
                    onPress={edit}
                    colorText={'#D80027'}
                    width={85}
                    height={26}
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.textTitle}>
                    {t.createAccountThirdTitleThird} {departmentState}
                  </Text>
                  <Button
                    text={t.editButton}
                    borderRadius={14}
                    onPress={editSecond}
                    colorText={'#D80027'}
                    width={85}
                    height={26}
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  text={t.confirm}
                  borderRadius={14}
                  onPress={gotoMainPage}
                  colorText={'#5A6CF3'}
                  width={270}
                  height={44}
                />
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </AlertNotificationRoot>
  );
};

export default CreateAccLast;
