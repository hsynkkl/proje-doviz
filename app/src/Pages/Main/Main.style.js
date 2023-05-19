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
    height: '55%',
    alignItems: 'center',
    paddingTop: '2%',
  },
  underContainer: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: '5%',
    borderRadius: 15,
  },
  underInnerContainer: {
    height: '30%',
    alignItems: 'center',
  },
  centerInnerContainer: {},
});

export default styles;
