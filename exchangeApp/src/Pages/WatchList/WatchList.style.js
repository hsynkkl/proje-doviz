import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  innerContainer: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
  },
  containerLinear: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  titleContainer: {
    height: 72,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  itemTitle: {
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
  itemPurchasePrice: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#F2F2F2',
  },
  itemBuyingPrice: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  miniTitle: {color: 'rgba(255, 255, 255, 0.5)'},
  itemContainer: {
    // height: '100%',
    flexDirection: 'row',
    // marginBottom: '1%',
    marginTop: '2%',
    paddingLeft: '4%',
    paddingRight: '12%',
  },
  imageContainer: {
    paddingRight: '3%',
  },
  starIcon: {
    width: '15%',
  },
  itemInnerRightContainer: {
    width: '25%',
  },
  itemInnerLeftContainer: {
    width: '58%',
  },
  flatListContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  firstFlatListContainer: {width: '85%', height: '100%'},
  secondFlatListContainer: {
    marginTop: '1%',
    width: '15%',
    height: '100%',
    //backgroundColor: '#0f0f0f',
    // marginLeft: '-5%',
  },
});

export default styles;
