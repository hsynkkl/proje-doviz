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

    marginBottom: '31.18%',
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
  innerFlatListContainer: {width: '90%', marginBottom: '10%', height: '90%'},
  thirdFlatListContainer: {
    paddingTop: 7,
    marginTop: '1%',
    width: '10%',
    height: '100%',
  },
  flatListContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  emptyScreenText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  emptyScreen: {
    height: '50%',
    paddingTop: '25%',
  },
});

export default styles;
