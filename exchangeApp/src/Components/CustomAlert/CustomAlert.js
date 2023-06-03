import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './CustomAlert.style';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
const CustomAlert = ({type, message, title}) => {
  const [showAlert, setShowAlert] = useState(true);
  const dispatch = useDispatch();
  const alertValue = useSelector(s => s.alertValueList);

  const showAlertTrue = () => {
    //setShowAlert(showAlertPar);
  };
  const hideAlert = () => {
    dispatch({type: 'SET_ALERTVALUE', payload: {value: false}});
    //console.log(alertValue);
    setShowAlert(false);
  };
  return (
    <View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={title}
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={type}
        showConfirmButton={true}
        cancelText="No, cancel"
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        confirmButtonStyle={styles.button}
        confirmButtonTextStyle={styles.buttonText}
        onCancelPressed={() => {
          hideAlert();
          console.log('canceled');
        }}
        onConfirmPressed={() => {
          //console.log('confirmed');

          hideAlert();
        }}
      />
    </View>
  );
};
export default CustomAlert;
