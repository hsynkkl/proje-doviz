import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  innerContainer: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderTopStartRadius: 14,
    justifyContent: 'space-between',
  },
  containerLinear: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  logo: {
    width: 83,
    height: 40,
    resizeMode: 'contain',
  },
  logoContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: '25%',
  },
  textTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    //textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 20,
  },

  textContainer: {
    flexDirection: 'row',
    margin: 20,
    marginBottom: 0,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'space-between',

    alignContent: 'center',
    borderRadius: 5,

    paddingTop: 5,
  },
  containerContainer: {
    margin: 50,
  },
  editButtonContainer: {},
  innerTextContainer: {
    width: '70%',

    //backgroundColor: 'black',
  },
});

export default styles;
