import {openDatabase} from 'react-native-sqlite-storage';

export default function firstRun() {
  return new Promise(resolve => {
    const db = openDatabase({
      name: 'rn_sqlite',
    });

    db.transaction(txn => {
      txn.executeSql(
        `DROP TABLE userAccounts`,
        [],
        (sqlTxn, res) => {},
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        `DROP TABLE kullanicilar`,
        [],
        (sqlTxn, res) => {},
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        `DROP TABLE processHistory`,

        [],
        (sqlTxn, res) => {},
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  });
}
