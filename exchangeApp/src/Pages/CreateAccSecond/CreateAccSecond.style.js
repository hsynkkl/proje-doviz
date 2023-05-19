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
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  item: {
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    width: 242,
    height: 35,
  },
  textContainer: {
    margin: 30,
    marginBottom: 10,
    height: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
  },
  itemDeneme: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    width: 242,
    height: 35,
    justifyContent: 'center',
  },
  titleDeneme: {
    fontSize: 12,
    textAlign: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
  },
});

export default styles;
