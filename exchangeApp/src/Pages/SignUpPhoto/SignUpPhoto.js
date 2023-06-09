import React, {useState} from 'react';
import {Text, PermissionsAndroid, Image, View} from 'react-native';
import styles from './SignUpPhoto.style';
import Button from '../../Components/Button';
import Line from '../../Components/Line';
import LinearGradient from 'react-native-linear-gradient';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import useTranslations from '../../Translation/useTranslations';
import checkPhotoUri from '../../utils/Functions/otherFunctions/checkPhotoUri';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const SignUpPhoto = ({navigation, route}) => {
  const {t, changeLanguage} = useTranslations();
  let isTruePhotoUri = false;
  const goToSignUpLast = async () => {
    isTruePhotoUri = await checkPhotoUri(cameraPhoto);
    if (isTruePhotoUri === true) {
      navigation.navigate('SignUpLastPage', {
        name: route.params.name,
        surname: route.params.surname,
        dobd: route.params.dobd,
        tckn: route.params.tckn,
        photoUri: cameraPhoto,
      });
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: t.error,
        textBody: t.alertDangerPhoto,
        button: t.close,
      });
    }
  };
  function goToLogin() {
    navigation.navigate('LoginPage');
  }
  const [cameraPhoto, setCameraPhoto] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraPhoto(result.assets[0].uri);
    }
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setCameraPhoto(result.assets[0].uri);
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
            <View style={styles.underContainer}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: cameraPhoto}} />
              </View>
              <View style={styles.innerButtonContainer}>
                <Button
                  text={t.openCamera}
                  onPress={openCamera}
                  width={150}
                  height={35}
                  colorButton={'#ffffff'}
                  colorText={'#5A6CF3'}
                />
                <Button
                  text={t.openGallery}
                  onPress={openGallery}
                  width={150}
                  height={35}
                  colorButton={'#ffffff'}
                  colorText={'#5A6CF3'}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                text={t.back}
                onPress={goToLogin}
                colorButton={'#ffffff'}
                colorText={'#5A6CF3'}
                width={150}
                height={35}
              />
              <Button
                text={t.continue}
                onPress={goToSignUpLast}
                colorButton={'#ffffff'}
                colorText={'#5A6CF3'}
                width={150}
                height={35}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </AlertNotificationRoot>
  );
};

export default SignUpPhoto;

/**/
