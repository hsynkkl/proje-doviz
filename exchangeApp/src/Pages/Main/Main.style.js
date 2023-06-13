import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 83,
    height: 40,
    resizeMode: 'contain',
  },
  logoContainer: {
    alignItems: 'center',
  },

  linearGradient: {
    height: '100%',
    width: '100%',
  },
  titleOfPage: {alignItems: 'center'},
  container: {
    flex: 1,
    marginTop: 20,
  },

  upperContainer: {
    padding: '3%',

    alignItems: 'center',
  },
  upperTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 22,
    color: 'black',
  },
  centerContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    borderRadius: 15,
    margin: '5%',
    // height: '45%',
    alignItems: 'center',
    paddingTop: '10%',
    paddingBottom: '10%',
  },
  underContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: '5%',
    borderRadius: 15,
  },
  underInnerContainer: {
    alignItems: 'center',
  },
  centerInnerContainer: {},
  menuButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: '40%',
  },
});

export default styles;
