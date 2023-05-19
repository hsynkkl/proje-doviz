import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 83,
    height: 40,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
  },
  deneme: {height: 50},
  containerLinear: {},
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginLeft: 20,
    width: 150,
  },
  title: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  historyContainer: {
    borderWidth: 0.5,

    borderColor: 'gray',
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 300,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  titleOfPageContainer: {
    // backgroundColor: 'gray',
    //flex: 1,
  },
  sellingCurrencyContainer: {width: '28%', marginBottom: 10},
  buyingCurrencyContainer: {width: '35%', marginBottom: 10},
  amountContainer: {width: '22%', marginBottom: 10},
  dateContainer: {width: '22%', marginBottom: 10},
  textTitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 30,
  },
  textFlatList: {
    color: 'black',
  },
  filterCardContainer: {
    backgroundColor: 'black',
  },
});

export default styles;
