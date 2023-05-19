import {openDatabase} from 'react-native-sqlite-storage';

export default function checkDB(identifyNo, password) {
  return new Promise(resolve => {
    kayitVar = false;

    const db = openDatabase({
      name: 'rn_sqlite',
    });
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM kullanicilar`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;

          if (len >= 0) {
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);

              if (item.identifyNo == identifyNo && item.password == password) {
                kayitVar = true;
              }
            }
            if (kayitVar == true) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        },
        err => {},
      );
    });
  });
}
