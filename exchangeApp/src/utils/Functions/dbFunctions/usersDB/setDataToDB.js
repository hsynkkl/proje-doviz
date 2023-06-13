import {openDatabase} from 'react-native-sqlite-storage';

export default function setDataToDB(data, values) {
  return new Promise(resolve => {
    kayitVar = false;
    const db = openDatabase({
      name: 'rn_sqlite',
    });

    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS kullanicilar (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, surname TEXT,dobd TEXT, identifyNo TEXT, phoneNo TEXT, password TEXT,photoUri TEXT)`,
        [],
        (sqlTxn, res) => {},
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(`SELECT * FROM kullanicilar`, [], (sqlTxn, res) => {
        let len = res.rows.length;
        if (len >= 0) {
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);

            if (item.identifyNo == data.tckn) {
              kayitVar = true;
              break;
            }
          }
          if (kayitVar == true) {
            resolve(false);
          } else {
            db.transaction(txn => {
              txn.executeSql(
                `INSERT INTO kullanicilar (name,surname,dobd,identifyNo,phoneNo,password,photoUri) VALUES (?,?,?,?,?,?,?)`,
                [
                  data.name,
                  data.surname,
                  data.dobd,
                  data.tckn,
                  values.phoneNumber,
                  values.password,
                  data.photoUri,
                ],
                (sqlTxn, res) => {},
                error => {
                  console.log('error on adding category ' + error.message);
                },
              );
            });
            resolve(true);
          }
        }
      });
    });
  });
}
