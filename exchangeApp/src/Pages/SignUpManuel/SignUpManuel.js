import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Formik} from 'formik';
import styles from './SignUpManuel.style';
import Input from '../../Components/TextInput';
import Button from '../../Components/Button';
import Line from '../../Components/Line';
import LinearGradient from 'react-native-linear-gradient';
import useTranslations from '../../Translation/useTranslations';
import DatePicker from 'react-native-date-picker';

import isTrueIdentify from '../../utils/Functions/otherFunctions/isTrueIdentify';
const SignUpCon = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [datePlaceHolder, setDatePlaceHolder] = useState(t.dateofBD);

  function handleLogin(values) {
    if (isTrueIdentify(values.identifyNo)) {
      navigation.navigate('SignUpPhotoPage', {
        name: values.name,
        surname: values.surname,
        dobd: datePlaceHolder,
        tckn: values.identifyNo,
      });
    } else {
      alert(t.alertWrongTRIN);
    }
  }
  return (
    <View style={styles.containerLinear}>
      <LinearGradient
        colors={['#FEB700', '#F30000']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{t.titleSignUp}</Text>
            <Line />
          </View>
        </View>
        <Formik
          initialValues={{name: '', surname: '', dobd: '', identifyNo: ''}}
          onSubmit={handleLogin}>
          {({handleSubmit, handleChange, values}) => (
            <View>
              <View style={styles.inputContainer}>
                <Input
                  value={values.name}
                  onType={handleChange('name')}
                  placeHolder={t.name}></Input>
                <Input
                  value={values.surname}
                  onType={handleChange('surname')}
                  placeHolder={t.surname}></Input>
                <Input
                  //value={valueDatePlaceHolder}
                  onType={handleChange('dobd')}
                  onPressIn={() => {
                    setOpen(true);
                  }}
                  placeHolder={datePlaceHolder.substr(0, 15)}></Input>
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  confirmText="Seç"
                  cancelText="İptal"
                  title={'Doğum Tarihi'}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setDatePlaceHolder(date.toString());
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
                <Input
                  value={values.identifyNo}
                  onType={handleChange('identifyNo')}
                  placeHolder={t.inputTCSignUp}
                  keyboardType={'number-pad'}></Input>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  text={t.continue}
                  width={100}
                  colorButton={'#ffffff'}
                  colorText={'#5A6CF3'}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </LinearGradient>
    </View>
  );
};

export default SignUpCon;