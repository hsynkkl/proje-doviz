import React, {useState} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import styles from './CustomAlert.style';
import AwesomeAlert from 'react-native-awesome-alerts';

const CustomAlert = ({showAlertPar}) => {
  const [showAlert, setShowAlert] = useState(true);
  const showAlertTrue = () => {
    setShowAlert(showAlertPar);
  };
  const hideAlert = () => {
    setShowAlert(false);
  };
  return (
    <View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="AwesomeAlert"
        message="I have a message for you!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="Yes, delete it"
        confirmButtonColor="#DD6B55"
        onCancelPressed={() => {
          hideAlert();
          console.log('canceled');
        }}
        onConfirmPressed={() => {
          hideAlert();
        }}
      />
    </View>
  );
};
export default CustomAlert;
