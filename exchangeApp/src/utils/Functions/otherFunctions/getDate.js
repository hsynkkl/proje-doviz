import {openDatabase} from 'react-native-sqlite-storage';

export default function processHistory() {
  return new Promise(resolve => {
    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' - ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds();
    resolve(datetime);
  });
}