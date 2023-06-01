import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  innerContainer: {
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  containerLinear: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    height: '18%',
    width: '90%',
    borderRadius: 14,
    marginTop: 50,
    // marginLeft: 12,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  fakeContainer: {
    marginLeft: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    height: '18%',
    width: '90%',
    borderRadius: 14,
    marginTop: 40,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  fakeText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    /* identical to box height */

    textAlign: 'center',
    letterSpacing: 0.04,

    color: '#000000',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imageContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  textName: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
  },
  textNumber: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    /* identical to box height */

    textAlign: 'center',
    letterSpacing: 0.04,

    color: 'rgba(0, 0, 0, 0.5)',
  },
  titleContainer: {},
});

export default styles;
