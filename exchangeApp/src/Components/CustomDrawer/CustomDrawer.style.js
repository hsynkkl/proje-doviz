import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FEB700'},
  contentContainerStyle: {backgroundColor: '#FEB700', height: '100%'},
  imageBackGroundContainer: {padding: 15, alignItems: 'center'},
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imageLogo: {paddingLeft: 15, alignItems: 'center'},
  innerImageContainer: {paddingLeft: '5%', justifyContent: 'center'},
  innerTextContainer: {justifyContent: 'center', paddingLeft: '5%'},
  textUser: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    color: '#3e2723',
  },
  drawerItemContainer: {flex: 1, paddingTop: '10%', backgroundColor: '#FEB700'},
  footerContainer: {
    padding: 20,
  },
  innerFooterContainer: {paddingVertical: 15},
  imageContainer: {
    height: '10%',
    flexDirection: 'row',
    backgroundColor: '#ffc400',

    borderRadius: 5,
  },
  profilePhoto: {
    paddingLeft: '15%',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textLogOut: {
    fontFamily: 'Roboto-Medium',
    fontSize: 15,
    marginLeft: 5,
    color: '#3e2723',
  },
  iconContainer: {flexDirection: 'row'},
});
