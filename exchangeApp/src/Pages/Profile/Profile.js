import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Profile.style';
import LinearGradient from 'react-native-linear-gradient';
import getDataFromDB from '../../utils/Functions/dbFunctions/usersDB/getDataFromDB';
import {useSelector} from 'react-redux';
import useTranslations from '../../Translation/useTranslations';
import LanguageCard from '../../Components/LanguageCard/LanguageCard';

const Profile = ({navigation}) => {
  const {t, changeLanguage} = useTranslations();
  const [showLanguageCard, setShowLanguageCard] = useState(false);
  const [nameSurname, setNameSurname] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [photo, setPhoto] = useState();
  const userId = useSelector(s => s.userIdList);
  var datas = [];

  useEffect(() => {
    async function fetchData() {
      datas = await getDataFromDB(userId);
      setNameSurname(datas[0]);
      setPhoneNumber(datas[1]);
      setPhoto(datas[2]);
    }
    fetchData();
  }, []);

  const editLanguage = () => {
    setShowLanguageCard(!showLanguageCard);
  };
  return (
    <View style={styles.containerLinear}>
      <LinearGradient
        colors={['#FEB700', '#F30000']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: photo}} />
              <Text style={styles.textName}>{nameSurname}</Text>
              <Text style={styles.textNumber}>{phoneNumber}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Text style={styles.fakeText}>{t.profileFakeTextFirst}</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.fakeText}>{t.profileFakeTextSecond}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.fakeText}>{t.profileFakeTextThird}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Text style={styles.fakeText}>{t.editProfile}</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.fakeText}>{t.thema}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={editLanguage}>
                <Text style={styles.fakeText}>{t.language}</Text>
              </TouchableOpacity>
            </View>
            {showLanguageCard && (
              <View style={{height: '50%', width: '80%'}}>
                <LanguageCard></LanguageCard>
              </View>
            )}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Profile;
