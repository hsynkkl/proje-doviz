import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  itemInnerLeftContainer: {
    width: '58%',
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
  itemInnerRightContainer: {
    width: '25%',
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
});
