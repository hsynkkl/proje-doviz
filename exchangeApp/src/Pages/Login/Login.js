import React, {useEffect} from 'react';
import styles from './Login.style';
import Button from '../../Components/Button';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firstRun from '../../utils/Functions/dbFunctions/otherDB/firstRun';
import useTranslations from '../../Translation/useTranslations';
import delete2 from '../../utils/Functions/deleteDBFunction/deleteDB';

function Login({navigation}) {
  const {t, changeLanguage} = useTranslations();
  useEffect(() => {
    console.log('firstrun');
    firstRun();
  }, []);
  function goToSignUp() {
    navigation.navigate('SignUpPage');
    delete2();
  }
  function login() {
    navigation.navigate('LoginSecondPage');
  }
  const de = () => {
    delete2();
  };
  return (
    <View style={styles.containerLinear}>
      <LinearGradient
        colors={['#FEB700', '#F30000']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              // source={require('../../utils/imgs/ellipse.png')}
            />
          </View>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../utils/imgs/logo.png')}
            />
            <Text style={styles.text}>{t.welcome}</Text>
          </View>
          <View style={styles.buttons}>
            <Button
              text={t.login}
              onPress={login}
              width={'83%'}
              colorButton={'#FCD779'}
              colorText={'#292929'}
            />

            <Button
              text={t.signUp}
              onPress={goToSignUp}
              width={'83%'}
              colorButton={'rgba(41, 41, 41, 0.9)'}
              colorText={'#ffffff'}
            />
          </View>

          <View style={styles.fakeBar}>
            <View style={styles.fakeTextContainer}>
              <Image
                style={styles.imageFake}
                source={require('../../utils/imgs/left.png')}
              />
              <Text style={styles.fakeText}>{t.fakeBarLeft}</Text>
            </View>
            <View style={styles.fakeTextContainer}>
              <Image
                style={styles.imageFake}
                source={require('../../utils/imgs/mid.png')}
              />
              <Text style={styles.fakeText}>{t.fakeBarMid}</Text>
            </View>
            <View style={styles.fakeTextContainer}>
              <Image
                style={styles.imageFake}
                source={require('../../utils/imgs/right.png')}
              />
              <Text style={styles.fakeText}>{t.fakeBarRight}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Login;
