import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
    margin: 5,
    height: 630,
    width: 382,
  },
  imageContainer: {
    alignItems: 'center',
  },
  detailsContainer: {},
  titleAccountContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: '7%',
    marginRight: '8%',
    marginTop: '5%',
    height: '10%',

    alignItems: 'center',
  },
  amountAccountContainer: {
    marginLeft: '6%',
    marginRight: '8%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '20%',
  },
  ibanAccountContainer: {
    marginTop: '5%',
    alignItems: 'center',
    marginBottom: '5%',
    justifyContent: 'space-between',

    flexDirection: 'row',
    marginLeft: '7%',
    marginRight: '8%',
    height: '15%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  itemTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 32,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  itemTitle3: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 32,
    color: 'white',
  },
  itemTitle2: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 32,
    color: 'white',
  },
});
