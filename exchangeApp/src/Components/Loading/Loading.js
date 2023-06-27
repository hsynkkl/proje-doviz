import React from 'react';
import LottieView from 'lottie-react-native';
function Loading() {
  return (
    <LottieView
      style={{backgroundColor: '#FEB700'}}
      source={require('../../utils/assets/loading.json')}
      autoPlay
    />
  );
}
export default Loading;
