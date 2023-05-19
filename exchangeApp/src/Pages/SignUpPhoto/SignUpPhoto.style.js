import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {},

  titleText: {
    marginTop: 50,
    paddingLeft: 30,
    fontSize: 20,
    fontWeight: '500',
    fontStyle: 'bold',
    color: 'black',
  },
  containerLinear: {
    flex: 1,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  underContainer: {
    height: '75%',
  },
  imageContainer: {
    width: '60%',
    height: '45%',
    borderRadius: 305,
    marginLeft: '20%',
    backgroundColor: 'rgba(255,255,255,0.6)',
    marginTop: '15%',

    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',

    borderRadius: 305,
  },
  innerButtonContainer: {
    paddingTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
