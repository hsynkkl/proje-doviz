import React from 'react';
import styles from './LoginSecond.style';
import Button from '../../Components/Button';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../../Components/TextInput';
import {Formik} from 'formik';
import checkDB from '../../utils/Functions/dbFunctions/usersDB/checkDB';
import {useDispatch} from 'react-redux';
import getUserId from '../../utils/Functions/dbFunctions/usersDB/getIdFromDB';
import useTranslations from '../../Translation/useTranslations';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const LoginSecond = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();

  var value;
  var userId;
  const dispatch = useDispatch();

  const handleForSubmit = async values => {
    value = await checkDB(values.identifyNo, values.password);

    userId = await getUserId(values.identifyNo);

    if (value == true) {
      dispatch({type: 'CLEAN_USERIDLIST'});
      dispatch({type: 'GET_USERID', payload: {userId: userId}});
      navigation.navigate('RootPage');
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: t.error,
        textBody: t.alertWrongIDPassword,
        button: t.close,
      });
      // alert(t.alertWrongIDPassword);
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.containerLinear}>
        <LinearGradient
          colors={['#FEB700', '#F30000']}
          style={styles.linearGradient}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} />
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../utils/imgs/logo.png')}
              />
              <Text style={styles.text}>{t.welcome}</Text>
            </View>
            <Formik
              initialValues={{identifyNo: '', password: ''}}
              onSubmit={handleForSubmit}>
              {({handleSubmit, handleChange, values}) => (
                <View>
                  <Input
                    value={values.identifyNo}
                    onType={handleChange('identifyNo')}
                    placeHolder={t.inputTC}
                    keyboardType={'number-pad'}></Input>

                  <Input
                    value={values.password}
                    onType={handleChange('password')}
                    placeHolder={t.password}
                    secureTextEntry={true}></Input>

                  <View style={styles.buttons}>
                    <Button
                      text={t.login}
                      width={'83%'}
                      colorButton={'#FCD779'}
                      colorText={'#000000'}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
            <View>
              <Text style={styles.textContainer}>{t.forgotPassword}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </AlertNotificationRoot>
  );
};
export default LoginSecond;
