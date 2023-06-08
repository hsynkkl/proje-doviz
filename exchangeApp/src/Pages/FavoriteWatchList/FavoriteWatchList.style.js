import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  imageContainer: {
    width: '100%',
    //marginLeft: '-14%',
    //paddingRight: '25%',

    marginBottom: '23.18%',
    // paddingRight: '0%',
  },
  logo: {
    resizeMode: 'contain',
    height: 36,
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  flatListContainer: {width: '100%', marginBottom: '19%'},
  thirdFlatListContainer: {
    paddingTop: 5,

    width: '11%',
    height: '100%',
    //backgroundColor: 'black',
  },
});

export default styles;
