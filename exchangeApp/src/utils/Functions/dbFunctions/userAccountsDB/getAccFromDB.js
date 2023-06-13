import {openDatabase} from 'react-native-sqlite-storage';

export default function getAccFromDB(userId) {
  return new Promise(resolve => {
    const db = openDatabase({
      name: 'rn_sqlite',
    });
    db.transaction(txn => {
      txn.executeSql(`SELECT * FROM userAccounts`, [], (sqlTxn, res) => {
        let len = res.rows.length;
        let accounts = [];

        if (len >= 0) {
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            if (userId == item.userId) {
              accounts.push(item);
            }
          }
          if (accounts.length > 0) {
            resolve(accounts);
          } else {
            resolve(false);
          }
        }
      });
    });
  });
}
