import React, {useState} from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import styles from './AccountsPage.style';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import acc from '../../utils/Functions/dbFunctions/userAccountsDB/getAccFromDB';
import AccountCardItem from '../../Components/AccountCardItem';
import TitleOfPage from '../../Components/TitleOfPages';
import useTranslations from '../../Translation/useTranslations';

const AccountsPage = () => {
  const {t, changeLanguage} = useTranslations();

  const userId = useSelector(s => s.userIdList);
  const userIdStr = userId[0].userId;
  const [flatListData, setFlatListData] = useState();
  const show = async () => {
    setFlatListData(await acc(userIdStr));
  };
  show();
  const Card = ({item}) => {
    return <AccountCardItem item={item} />;
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
          <View>
            <TitleOfPage title={t.accounts}></TitleOfPage>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList
              data={flatListData}
              renderItem={Card}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default AccountsPage;
