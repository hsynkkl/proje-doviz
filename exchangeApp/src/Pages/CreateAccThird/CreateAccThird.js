import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CreateAccThird.style';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../Components/Button';
import setAccToDb from '../../utils/Functions/dbFunctions/userAccountsDB/setAccToDB';
import useTranslations from '../../Translation/useTranslations';
import acc from '../../utils/Functions/dbFunctions/userAccountsDB/getAccFromDB';
import CustomAlert from '../../Components/CustomAlert/';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import randomIban from '../../utils/Functions/otherFunctions/randomIban';
const CreateAccLast = ({navigation, route}) => {
  const {t, changeLanguage} = useTranslations();
  const [accTypeState, setAccTypeState] = useState();
  const [exchangeTypeState, setExchangeTypeState] = useState();
  const [departmentState, setDepartmentState] = useState();
  const userIdSelector = useSelector(s => s.userIdList);
  const userId = userIdSelector[0].userId.toString();
  const alertValue = useSelector(s => s.alertValueList);
  const [alertValueState, setAlertValueState] = useState(false);
  useEffect(() => {
    let value = alertValue.value;
    setAlertValueState(value);
    if (value === true) {
      setHideAlert(true);
    } else {
      setHideAlert(false);
    }
  }, [alertValue]);
  const dispatch = useDispatch();
  const [alertMessage, setAlertMessage] = useState();
  const [hideAlert, setHideAlert] = useState(false);
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
      dispatch({type: 'SET_ALERTVALUE', payload: {value: true}});

      const accs = await acc(userId);

      dispatch({type: 'SET_FLATLISTDATA', payload: {datas: accs}});
      setAlertMessage(t.alertCreateAccSuccesfully);
      // alert(t.alertCreateAccSuccesfully);
      navigation.navigate('CreateAccPage');
      navigation.navigate('Anasayfa');
    } else if (value[1] === false) {
      dispatch({type: 'SET_ALERTVALUE', payload: {value: true}});

      if (value[0] === 1) {
        //setHideAlert(!hideAlert);
        setAlertMessage(t.alertCreateAccUnSuccesfully2);
        //alert(t.alertCreateAccUnSuccesfully2);
      } else {
        //setHideAlert(!hideAlert);
        setAlertMessage(t.alertCreateAccUnsuccesfully);

        //alert(t.alertCreateAccUnsuccesfully);
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
              {hideAlert && (
                <CustomAlert
                  type={false}
                  message={alertMessage}
                  title={t.alertTitle}
                />
              )}
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CreateAccLast;
