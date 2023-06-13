import {openDatabase} from 'react-native-sqlite-storage';

export default function getHistory(userIdStr) {
  return new Promise(resolve => {
    const db = openDatabase({
      name: 'rn_sqlite',
    });
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM processHistory`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;
          let historyOfUser = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            if (userIdStr == item.userId) {
              historyOfUser.push(item);
            }
          }
          resolve(historyOfUser);
        },
        err => {
          console.log(err.message);
        },
      );
    });
  });
}
