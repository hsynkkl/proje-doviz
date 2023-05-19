import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  text: {
    marginTop: 55,

    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {},
  textContainer: {
    paddingLeft: 40,
    paddingBottom: 30,
    paddingTop: 40,
  },
  buttonContainer: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
