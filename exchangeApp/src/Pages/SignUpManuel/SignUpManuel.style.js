import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  titleContainer: {},
  innerDateContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: 5,
    padding: 3,
    borderRadius: 5,
    width: 331.5,
    height: '90%',
  },
  dateContainer: {
    marginLeft: 25,
    height: '18%',
    marginTop: 10,
    marginBottom: 5,
  },
  dateText: {},
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
  inputContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row-reverse',
    marginLeft: 10,
  },
});

export default styles;
