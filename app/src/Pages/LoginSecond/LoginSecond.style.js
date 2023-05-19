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
    width: 220,
    height: 220,
    borderRadius: 110,
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
  textContainer: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.5)',
  },
});
export default styles;
