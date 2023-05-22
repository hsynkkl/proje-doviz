import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import styles from './Main.style';
import {useSelector} from 'react-redux';
import {DonutChart} from 'react-native-circular-chart';
import LinearGradient from 'react-native-linear-gradient';
import convertData from '../../utils/Functions/otherFunctions/convertData';
import Item from '../../Components/MainItem';
import useTranslations from '../../Translation/useTranslations';
import TitleOfPage from '../../Components/TitleOfPages';
const Main = () => {
  const {t, changeLanguage} = useTranslations();

  const {width, height} = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [flatListData, setFlatListData] = useState();
  const [donutChartData, setDonutChartData] = useState();
  const [hide, setHide] = useState(false);
  const userId = useSelector(s => s.userIdList);
  const PADDING = 8;
  const userIdStr = userId[0].userId;
  const accs = useSelector(s => s.newFlatlistData);

  useEffect(() => {
    const show = async () => {
      setDonutChartData(await convertData(userIdStr));
      setFlatListData(await convertData(userIdStr));

      const value = await convertData(userIdStr);
      if (value.length === undefined) {
        setHide(false);
      } else {
        setHide(false);
        setHide(true);
      }
      setLoading(true);
    };

    show();
  }, [accs]);
  if (loading === false) {
    return <ActivityIndicator size="large" />;
  }
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
            <TitleOfPage title={t.assets}></TitleOfPage>
          </View>
          <View>
            {hide && (
              <View>
                <View style={styles.centerContainer}>
                  <DonutChart
                    data={donutChartData}
                    strokeWidth={15}
                    radius={90}
                    containerWidth={width - PADDING * 2}
                    containerHeight={105 * 2}
                    type="butt"
                    startAngle={0}
                    endAngle={360}
                    animationType="slide"
                  />
                </View>
                <View style={styles.underContainer}>
                  <View style={styles.underInnerContainer}>
                    <FlatList
                      data={flatListData}
                      renderItem={Item}
                      keyExtractor={item => item.id}
                      horizontal
                    />
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
export default Main;
