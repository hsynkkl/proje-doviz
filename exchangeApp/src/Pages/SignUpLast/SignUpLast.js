import React from 'react';
import {View, Text} from 'react-native';
import styles from './SignUpLast.style';
import Button from '../../Components/Button';
import Line from '../../Components/Line';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../Components/TextInput';
import useTranslations from '../../Translation/useTranslations';
import {Formik} from 'formik';
import checkPassword from '../../utils/Functions/otherFunctions/checkPassword';
import checkNumber from '../../utils/Functions/otherFunctions/checkNumber';
import setDataToDB from '../../utils/Functions/dbFunctions/usersDB/setDataToDB';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const SignUpLast = ({navigation, route}) => {
  const {t, changeLanguage} = useTranslations();
  let isTruePassword = false;
  const data = route.params;
  let isTrueIN = false;
  let isTrueNumber = false;
  const handleForSubmit = async values => {
    if (values.password === values.passwordConfirm) {
      isTruePassword = await checkPassword(values.password);
      isTrueIN = await setDataToDB(data, values);
      isTrueNumber = await checkNumber(values.phoneNumber);
      if (isTrueNumber === true) {
        if (isTruePassword === true) {
          if (isTrueIN == true) {
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: t.successfully,
              textBody: t.alertSuccessCreateAcc,
              button: t.close,
              onHide: () => {
                navigation.navigate('LoginPage');
              },
            });
          } else {
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: t.error,
              textBody: t.alertUsingTRIN,
              button: t.close,
            });
          }
        } else {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: t.error,
            textBody: t.alertDangerPassword,
            button: t.close,
          });
        }
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: t.error,
          textBody: t.alertDangerPhoneNumber,
          button: t.close,
        });
      }
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: t.error,
        textBody: t.alertSamePassword,
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
            <Formik
              initialValues={{
                phoneNumber: '',
                password: '',
                passwordConfirm: '',
              }}
              onSubmit={handleForSubmit}>
              {({handleSubmit, handleChange, values}) => (
                <View>
                  <View style={styles.inputContainer}>
                    <Input
                      value={values.phoneNumber}
                      maxLength={11}
                      onType={handleChange('phoneNumber')}
                      placeHolder={t.phoneNumber}
                      keyboardType={'number-pad'}></Input>
                    <Input
                      value={values.password}
                      onType={handleChange('password')}
                      placeHolder={t.password}
                      secureTextEntry={true}></Input>
                    <Input
                      value={values.passwordConfirm}
                      onType={handleChange('passwordConfirm')}
                      placeHolder={t.passwordConfirm}
                      secureTextEntry={true}></Input>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      text={t.confirm}
                      width={100}
                      colorButton={'#ffffff'}
                      colorText={'#5A6CF3'}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </LinearGradient>
      </View>
    </AlertNotificationRoot>
  );
};
export default SignUpLast;
