import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    paddingLeft: 5,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  imageFake: {
    width: 40,
    height: 40,
  },
  fakeBar: {
    paddingTop: '12%',
    marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fakeTextContainer: {
    width: '15%',
  },
  fakeText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 10,
    lineHeight: 15,

    color: 'rgba(0, 0, 0, 1)',
  },
  imageContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  logo: {
    width: 83,
    height: 40,
    resizeMode: 'contain',
  },
  logoContainer: {
    paddingLeft: 45,
    paddingTop: 18,
  },

  containerLinear: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  buttons: {
    marginTop: 70,
  },
});

export default styles;
