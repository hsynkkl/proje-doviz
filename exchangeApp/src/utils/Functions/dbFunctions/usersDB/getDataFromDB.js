import {openDatabase} from 'react-native-sqlite-storage';

export default function processHistory(userId) {
  return new Promise(resolve => {
    const userIdStr = userId[0].userId;
    var nameSurname;
    var phoneNumber;
    var photoUri;
    var dataList = [];
    const db = openDatabase({
      name: 'rn_sqlite',
    });
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM kullanicilar`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;

          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            if (item.id == userIdStr) {
              nameSurname = item.name + ' ' + item.surname;
              phoneNumber = item.phoneNo;
              photoUri = item.photoUri;
            }
          }
          dataList = [nameSurname, phoneNumber, photoUri];
          resolve(dataList);
        },
        err => {
          console.log(err.message);
        },
      );
    });
  });
}
