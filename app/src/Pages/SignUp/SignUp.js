import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './SignUp.style';
import Button from '../../Components/Button';
import Line from '../../Components/Line';
import LinearGradient from 'react-native-linear-gradient';
import useTranslations from '../../Translation/useTranslations';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
NfcManager.start();
const SignUp = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();
  function goToLogin() {
    navigation.navigate('LoginPage');
  }
  function handleSubmit() {
    navigation.navigate('SignUpManuelPage');
  }
  async function readNdef() {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const tag = await NfcManager.getTag();
      console.log('Tag found', tag);
    } catch (ex) {
      console.log('Oops!', ex.error);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <LinearGradient
      colors={['#FEB700', '#F30000']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>{t.titleSignUpFirst}</Text>
          <Line />
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={readNdef}>
            <View>
              <Image
                style={styles.image}
                source={require('../../utils/imgs/nfcPortre.png')}></Image>
            </View>
          </TouchableOpacity>
          <View></View>
        </View>
        <View></View>
        <View style={styles.buttonContainer}>
          <Button
            text={t.cancel}
            onPress={goToLogin}
            colorButton={'#ffffff'}
            colorText={'#5A6CF3'}
            width={150}
            height={35}
          />

          <Button
            text={t.continueManuel}
            onPress={handleSubmit}
            colorButton={'#ffffff'}
            colorText={'#5A6CF3'}
            width={150}
            height={35}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUp;
