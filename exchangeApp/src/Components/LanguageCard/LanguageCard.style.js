import {StyleSheet, StatusBar} from 'react-native';
export default StyleSheet.create({
  container: {
    borderRadius: 10,
    height: '44.6%',
    backgroundColor: 'white',
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  textTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 30,

    color: '#000000',
  },
  imageContainer: {
    paddingTop: '2%',
    paddingLeft: '5%',
  },
  textContainer: {
    marginLeft: '3%',
  },
  underContainer: {},
  buttonContainer: {
    height: '25%',

    flexDirection: 'row-reverse',

    paddingLeft: '5%',
  },
  touchableOpacityContainer: {
    width: '30%',
    height: '85%',
    backgroundColor: '#bdbdbd',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
