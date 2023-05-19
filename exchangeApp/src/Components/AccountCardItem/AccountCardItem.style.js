import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(123,252,32,0.3)',
  },
  imageContainer: {
    alignItems: 'center',
  },
  innertopContainer: {
    flexDirection: 'row',
    padding: 6,
  },
  textTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 14,
    lineHeight: 30,

    color: '#5d4037',
  },
  textItem: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 30,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
