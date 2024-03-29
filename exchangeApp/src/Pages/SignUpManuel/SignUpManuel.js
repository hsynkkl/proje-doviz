import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import styles from './SignUpManuel.style';
import Input from '../../Components/TextInput';
import Button from '../../Components/Button';
import Line from '../../Components/Line';
import LinearGradient from 'react-native-linear-gradient';
import useTranslations from '../../Translation/useTranslations';
import DatePicker from 'react-native-date-picker';
import convertDate from '../../utils/Functions/otherFunctions/convertDate';
import checkLoginValues from '../../utils/Functions/otherFunctions/checkLoginValues';
import isTrueIdentify from '../../utils/Functions/otherFunctions/isTrueIdentify';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const SignUpCon = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [datePlaceHolder, setDatePlaceHolder] = useState(t.dateofBD);
  let isTrueLoginValues = false;

  const handleLogin = async values => {
    isTrueLoginValues = await checkLoginValues(
      values.name,
      values.surname,
      datePlaceHolder,
    );
    if (isTrueLoginValues === true) {
      if (isTrueIdentify(values.identifyNo)) {
        navigation.navigate('SignUpPhotoPage', {
          name: values.name,
          surname: values.surname,
          dobd: datePlaceHolder,
          tckn: values.identifyNo,
        });
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: t.error,
          textBody: t.alertWrongTRIN,
          button: t.close,
        });
      }
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: t.error,
        textBody: t.alertDangerLoginValues,
        button: t.close,
      });
    }
  };
  return (
    <AlertNotificationRoot>
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
            initialValues={{name: '', surname: '', identifyNo: ''}}
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
                  <View style={styles.dateContainer}>
                    <TouchableOpacity
                      style={styles.innerDateContainer}
                      onPress={() => {
                        setOpen(true);
                      }}>
                      <Text style={styles.dateText}>{datePlaceHolder}</Text>
                      <DatePicker
                        modal
                        mode="date"
                        open={open}
                        date={date}
                        confirmText={t.confirmTextDate}
                        cancelText={t.cancelTextDate}
                        title={t.titleTextDate}
                        onConfirm={date => {
                          setOpen(false);
                          setDate(date);
                          const dateString = date.toDateString();
                          setDatePlaceHolder(convertDate(dateString.slice(4)));
                        }}
                        onCancel={() => {
                          setOpen(false);
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <Input
                    value={values.identifyNo}
                    onType={handleChange('identifyNo')}
                    placeHolder={t.inputTCSignUp}
                    maxLength={11}
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
    </AlertNotificationRoot>
  );
};

export default SignUpCon;
