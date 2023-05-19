import {StyleSheet, StatusBar} from 'react-native';
export default StyleSheet.create({
  container: {
    //flex: 1,
    // height: '90%',
    // marginTop: StatusBar.currentHeight || 0,
    //backgroundColor: 'blue',
    // backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    height: 285,
    borderRadius: 10,
    //marginTop: '60%',
    width: '100%',
  },
  innerTopContainer: {height: '55%'},
  upperContainer: {
    height: '52%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
  },
  innerContainer: {
    height: '100%',
    marginRight: '20%',
    marginLeft: '5%',
    //backgroundColor: 'yellow',
    width: '33%',
  },
  buttonContainer: {
    // height: '32%',
    // backgroundColor: 'blue',
  },
  flatListContainer: {
    //backgroundColor: 'green',
  },
  underContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    width: '100%',
    height: 55,
    //backgroundColor: 'black',
  },
});
