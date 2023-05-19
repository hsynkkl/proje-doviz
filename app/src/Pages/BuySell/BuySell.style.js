import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  containerLinear: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  upperContainer: {
    alignItems: 'center',
  },
  underContainer: {
    alignItems: 'center',
  },
  topExchangeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25);',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    width: 322,
    height: 105,
    marginTop: 50,
  },
  bottomExchangeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25);',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    width: 322,
    height: 105,
  },
  exchangeContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25);',
    borderRadius: 14,
    width: 322,
    height: 209,
    marginTop: 50,
  },
  itemTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
    paddingLeft: 20,
    paddingTop: 10,
  },
  topExchangeImage: {
    paddingLeft: 20,
    paddingTop: 19,
  },
  itemShortTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: 'rgba(255, 255, 255, 0.75)',
  },
  innerItemTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  itemInnerContainer: {
    paddingLeft: 12,
    paddingTop: 19,
  },
  flatListContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  innerLeftContainer: {flexDirection: 'row'},
  textUpperPriceContainer: {
    paddingRight: 25,
    backgroundColor: 'rgba(255, 255, 255, 0);',
  },
  textUnderPriceContainer: {
    paddingTop: 25,
    paddingLeft: 65,
    width: 150,

    textAlign: 'right',
  },
  textPrice: {
    height: 19,
    color: '#F2F2F2',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  },
  selectBoxContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.25);',
    height: 305,
    width: 322,
    borderRadius: 14,
    marginTop: 25,
  },
  inputContainer: {
    paddingBottom: 10,
    height: 80,
    backgroundColor: 'rgba(255,255,255,0);',
  },
  selectListUpper: {
    height: 115,
  },
  selectListUnder: {
    paddingTop: 10,
    height: 115,
  },
  underContainerUpperText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: 'white',
    paddingTop: 10,
    paddingLeft: 20,
  },
  underContainerUnderText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: 'white',

    paddingLeft: 20,
  },
  innerSelectListContainer: {
    paddingTop: 10,
    paddingLeft: 41,
    paddingRight: 41,
  },
  buttonContainer: {
    marginTop: 15,
  },
});

export default styles;
