import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, Image, FlatList} from 'react-native';
import transferingMoney from '../../utils/Functions/dbFunctions/userAccountsDB/transferingMoney';
import styles from './BuySell.style';
import LinearGradient from 'react-native-linear-gradient';
import Line from '../../Components/Line';
import Button from '../../Components/Button';
import {socket} from '../../Router';
import getAccounts from '../../utils/Functions/dbFunctions/userAccountsDB/getAccFromDB';
import currencyTypeTextSplit from '../../utils/Functions/otherFunctions/currencyTypeTextSplit';
import {useSelector} from 'react-redux';
import calculateRates from '../../utils/Functions/otherFunctions/calculateRates';
import processHistory from '../../utils/Functions/dbFunctions/processHistoryDB/processHistory';
import getDate from '../../utils/Functions/otherFunctions/getDate';
import incomingMoney from '../../utils/Functions/dbFunctions/userAccountsDB/incomingMoney';
import useTranslations from '../../Translation/useTranslations';
import RenderBuySellItem from '../../Components/RenderBuySellItem';
import {useDispatch} from 'react-redux';
import calculateRatesForAlert from '../../utils/Functions/otherFunctions/calculateRatesForAlert';
import AmountInput from '../../Components/AmountInput/AmountInput';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const BuySell = ({navigation}) => {
  const [images, setimages] = useState([
    {src: require('../../utils/imgs/tl.png'), id: 1, name: 'TL'},
    {src: require('../../utils/imgs/usd.png'), id: 2, name: 'USD'},
    {src: require('../../utils/imgs/euro.png'), id: 3, name: 'EUR'},
    {src: require('../../utils/imgs/gbp.png'), id: 4, name: 'GBP'},
  ]);
  const {t, changeLanguage} = useTranslations();
  const [loading, setLoading] = useState(true);
  const [ratesList, setRatesList] = useState();
  const [buttonTitleUpper, setButtonTitleUpper] = useState(t.list);
  const [buttonTitleUnder, setButtonTitleUnder] = useState(t.list);
  const userId = useSelector(s => s.userIdList);
  const userIdStr = userId[0].userId.toString();
  const dispatch = useDispatch();
  const [showTheThingUpper, setShowTheThingUpper] = useState(false);
  const [showTheThingUnder, setShowTheThingUnder] = useState(false);
  const [selectedUpperId, setSelectedUpperId] = useState();
  const [selectedUnderId, setSelectedUnderId] = useState();
  const [buyingItemShortTitle, setBuyingItemShortTitle] = useState('');
  const [buyingItemLongTitle, setBuyingItemLongTitle] = useState('');
  const [sellingItemShortTitle, setSellingItemShortTitle] = useState('');
  const [sellingItemLongTitle, setSellingItemLongTitle] = useState('');
  const [inputAmount, setInputAmount] = useState();
  const [flatListData, setFlatListData] = useState();
  const [priceBuying, setPriceBuying] = useState('');
  const [upperImage, setUnderImage] = useState();
  const [underImage, setUpperImage] = useState();
  const [selectedUpperCurrencyTypeText, setSelectedUpperCurrencyTypeText] =
    useState('');
  const [selectedUnderCurrencyTypeText, setSelectedUnderCurrencyTypeText] =
    useState('');

  useEffect(() => {
    socket.on('exchange', data => {
      setRatesList(data);
      setLoading(false);
      async function fetchData() {
        return setFlatListData(await getAccounts(userId[0].userId.toString()));
      }
      fetchData();
    });
  }, []);
  const check = async () => {
    var value = false;
    if (
      buyingItemShortTitle &&
      sellingItemShortTitle &&
      inputAmount !== undefined
    ) {
      value = true;
    }
    return value;
  };
  const handleSubmit = async () => {
    const rate = await calculateRatesForAlert(
      ratesList,
      buyingItemShortTitle,
      sellingItemShortTitle,
    );
    const value = await check();
    if (value === true) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: t.alertInfoConfirm,
        textBody: `"${buyingItemShortTitle}" ${t.alertInfoFirst} "${sellingItemShortTitle}" ${t.alertInfoSecond}  "${inputAmount}" ${buyingItemShortTitle} ${t.alertInfoLast}
        ${t.alertInfoRate} ${rate}.
        ${t.alertInfoTime}`,
        button: t.alertInfoButton,
        onPressButton: () => {
          processing();
        },
        onHide: () => {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: t.alertInfoCancel,
            textBody: t.alertInfoNoTouch,
            button: t.close,
            onPressButton: () => {
              resetUnSuccesfully();
              Dialog.hide();
            },
          });
        },
        autoClose: 5000,
      });
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: t.alertInfoWarningTitle,
        textBody: t.alertInfoWarningText,
        button: t.close,

        onPressButton: () => {
          resetUnSuccesfully();
          Dialog.hide();
        },
      });
    }

    const processing = async () => {
      await handleSearch();
      const isTrue = await transferingMoney(
        userId,
        inputAmount,
        buyingItemShortTitle,
      );
      if (isTrue == true) {
        const isTrue2 = await incomingMoney(
          userId,
          priceBuying,
          sellingItemShortTitle,
        );
        const dateTime = await getDate();
        if (isTrue === true && isTrue2 === true) {
          await processHistory(
            userId,
            dateTime,
            inputAmount,
            ratesList,
            selectedUpperId,
            selectedUnderId,
            buyingItemShortTitle,
            sellingItemShortTitle,
          );
          resetSuccesfully();
        }
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: t.error,
          textBody: t.alertUnSuccesfullyTansfer,
          button: t.close,
        });
        resetUnSuccesfully();
      }
    };
  };
  const resetSuccesfully = async () => {
    setSelectedUpperId();
    setSelectedUnderId();
    setBuyingItemLongTitle();
    setBuyingItemShortTitle();
    setSellingItemLongTitle();
    setSellingItemShortTitle();
    setShowTheThingUpper(false);
    setButtonTitleUpper(t.list);
    setShowTheThingUnder(false);
    setButtonTitleUnder(t.list);
    setPriceBuying('');
    setUpperImage();
    setUnderImage();
    const accs = await getAccounts(userIdStr);
    dispatch({type: 'SET_FLATLISTDATA', payload: {datas: accs}});
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: t.successfully,
      textBody: t.alertSuccesfullyTansfer,
      button: t.close,
      onHide: () => {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: t.alertInfoToast,
          textBody: `${sellingItemShortTitle} ${t.alertToastIncomingMoney}`,
        });
      },
    });
  };
  const resetUnSuccesfully = () => {
    setSelectedUpperId();
    setSelectedUnderId();
    setBuyingItemLongTitle();
    setBuyingItemShortTitle();
    setSellingItemLongTitle();
    setSellingItemShortTitle();
    setShowTheThingUpper(false);
    setButtonTitleUpper(t.list);
    setShowTheThingUnder(false);
    setButtonTitleUnder(t.list);
    setPriceBuying('');
    setUpperImage();
    setUnderImage();
  };

  const handleOpenUnder = async () => {
    setShowTheThingUnder(!showTheThingUnder);
    if (buttonTitleUnder == t.list) {
      setButtonTitleUnder(t.select);
    } else {
      setButtonTitleUnder(t.list);
    }
    const titles = await currencyTypeTextSplit(selectedUnderCurrencyTypeText);
    setSellingItemShortTitle(titles[0]);
    setSellingItemLongTitle(titles[1]);
    if (typeof titles[0] !== undefined) {
      for (let i = 0; i < images.length; i++) {
        if (images[i].name === titles[0]) {
          setUpperImage(images[i].src);
        }
      }
    }
  };
  const handleOpenUpper = async () => {
    setShowTheThingUpper(!showTheThingUpper);
    if (buttonTitleUpper == t.list) {
      setButtonTitleUpper(t.select);
    } else {
      setButtonTitleUpper(t.list);
    }
    const titles = await currencyTypeTextSplit(selectedUpperCurrencyTypeText);
    setBuyingItemShortTitle(titles[0]);
    setBuyingItemLongTitle(titles[1]);
    if (typeof titles[0] !== undefined) {
      for (let i = 0; i < images.length; i++) {
        if (images[i].name === titles[0]) {
          setUnderImage(images[i].src);
        }
      }
    }
  };

  const renderItemUpper = ({item}) => {
    const color = item.id === selectedUpperId ? 'white' : 'black';
    return (
      <RenderBuySellItem
        item={item}
        onPress={() => {
          setSelectedUpperId(item.id);
          setSelectedUpperCurrencyTypeText(item.currencyTypeText);
        }}
        textColor={color}
      />
    );
  };
  const renderItemUnder = ({item}) => {
    const color = item.id === selectedUnderId ? 'white' : 'black';
    return (
      <RenderBuySellItem
        item={item}
        onPress={() => {
          setSelectedUnderId(item.id);
          setSelectedUnderCurrencyTypeText(item.currencyTypeText);
        }}
        textColor={color}
      />
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  const handleSearch = async text => {
    const calculatedRates = await calculateRates(
      ratesList,
      buyingItemShortTitle,
      sellingItemShortTitle,
      text,
    );
    setInputAmount(text);
    if (calculatedRates.length === 3) {
      setPriceBuying('0');
    } else {
      setPriceBuying(calculatedRates);
    }
  };
  return (
    <AlertNotificationRoot>
      <View style={styles.containerLinear}>
        <LinearGradient
          colors={['#141414', '#FEB700']}
          style={styles.linearGradient}>
          <View style={styles.upperContainer}>
            <View style={styles.topExchangeContainer}>
              <Text style={styles.itemTitle}>{t.currencySoldUpperCase}</Text>
              <View style={styles.flatListContainer}>
                <View style={styles.innerLeftContainer}>
                  <View style={styles.topExchangeImage}></View>
                  <View style={styles.imageContainerUpper}>
                    <Image style={styles.logo} source={upperImage} />
                  </View>
                  <View style={styles.itemInnerContainer}>
                    <Text style={styles.itemShortTitle}>
                      {buyingItemShortTitle}
                    </Text>
                    <Text style={styles.innerItemTitle}>
                      {buyingItemLongTitle}
                    </Text>
                  </View>
                </View>
                <View style={styles.textUpperPriceContainer}>
                  <View style={styles.inputContainer}>
                    <AmountInput onSearch={handleSearch} />
                  </View>
                </View>
              </View>
            </View>
            <Line
              paddingTop={'-5%'}
              paddingLeft={'9%'}
              paddingRight={'9%'}></Line>
            <View style={styles.bottomExchangeContainer}>
              <Text style={styles.itemTitle}>
                {t.currencyReceivedUpperCase}
              </Text>
              <View style={styles.flatListContainer}>
                <View style={styles.innerLeftContainer}>
                  <View style={styles.topExchangeImage}></View>
                  <View style={styles.imageContainerUnder}>
                    <Image style={styles.logo} source={underImage} />
                  </View>
                  <View style={styles.itemInnerContainer}>
                    <Text style={styles.itemShortTitle}>
                      {sellingItemShortTitle}
                    </Text>
                    <Text style={styles.innerItemTitle}>
                      {sellingItemLongTitle}
                    </Text>
                  </View>
                </View>
                <View style={styles.textUnderPriceContainer}>
                  <Text style={styles.textPrice}>{priceBuying}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.underContainer}>
            <View style={styles.selectBoxContainer}>
              <Text style={styles.underContainerUpperText}>
                {t.sellingAccount}
              </Text>
              <View style={styles.selectListUpper}>
                <View style={styles.innerSelectListContainer}>
                  <View style={styles.flatListContainer}>
                    {showTheThingUpper && (
                      <FlatList
                        data={flatListData}
                        renderItem={renderItemUpper}
                        keyExtractor={item => item.id}
                        extraData={selectedUpperId}
                      />
                    )}
                  </View>
                  <Button
                    text={buttonTitleUpper}
                    width={270}
                    height={22}
                    onPress={handleOpenUpper}
                    colorText={'#ffffff'}
                    borderRadius={14}
                    colorButton={'rgba(235, 87, 87, 0.2)'}
                  />
                </View>
              </View>
              <Line
                paddingTop={'-5%'}
                paddingLeft={'0%'}
                paddingRight={'0%'}></Line>

              <View style={styles.selectListUnder}>
                <Text style={styles.underContainerUnderText}>
                  {t.buyingAccount}
                </Text>
                <View style={styles.innerSelectListContainer}>
                  <View style={styles.flatListContainer}>
                    {showTheThingUnder && (
                      <FlatList
                        data={flatListData}
                        renderItem={renderItemUnder}
                        keyExtractor={item => item.id}
                        extraData={selectedUnderId}
                      />
                    )}
                  </View>
                  <Button
                    text={buttonTitleUnder}
                    width={270}
                    height={22}
                    onPress={handleOpenUnder}
                    colorText={'#ffffff'}
                    borderRadius={14}
                    colorButton={'rgba(235, 87, 87, 0.2)'}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text={t.confirm}
              borderRadius={14}
              onPress={handleSubmit}
              colorText={'#ffffff'}
              colorButton={'rgba(235, 87, 87, 0.75)'}
              width={270}
              height={44}
            />
          </View>
        </LinearGradient>
      </View>
    </AlertNotificationRoot>
  );
};
export default BuySell;
