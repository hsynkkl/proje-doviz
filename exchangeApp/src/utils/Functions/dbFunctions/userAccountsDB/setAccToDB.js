import {openDatabase} from 'react-native-sqlite-storage';
import randomIban from '../../otherFunctions/randomIban';
export default function setDataToDB(
  userId,
  accountType,
  currencyType,
  departmant,
  iban,
) {
  return new Promise(resolve => {
    let _return = [];
    if (
      typeof currencyType[0] == 'undefined' ||
      typeof accountType[0] == 'undefined' ||
      typeof departmant[0] == 'undefined'
    ) {
      _return = [1, false];
      resolve(_return);
    } else {
      let kayitVar = false;

      const db = openDatabase({
        name: 'rn_sqlite',
      });

      db.transaction(txn => {
        txn.executeSql(
          `CREATE TABLE IF NOT EXISTS userAccounts (id INTEGER PRIMARY KEY AUTOINCREMENT,userId TEXT, accountType TEXT,currencyType TEXT,departmant TEXT,accountTypeText TEXT,currencyTypeText TEXT,departmantText TEXT,balance TEXT,iban TEXT)`,
          [],
          (sqlTxn, res) => {},
          error => {
            console.log('error on creating table ' + error.message);
          },
        );
      });

      db.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM userAccounts`,
          [],
          (sqlTxn, res) => {
            let len = res.rows.length;
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              if (
                item.userId == userId &&
                item.currencyType == currencyType[0]
              ) {
                kayitVar = true;
              }
            }
            if (kayitVar != true) {
              db.transaction(txn => {
                txn.executeSql(
                  `INSERT INTO userAccounts (userId,accountType,currencyType,departmant,accountTypeText,currencyTypeText,departmantText,balance,iban) VALUES (?,?,?,?,?,?,?,?,?)`,
                  [
                    userId,
                    accountType[0],
                    currencyType[0],
                    departmant[0],
                    accountType[1],
                    currencyType[1],
                    departmant[1],
                    '10000',
                    iban,
                  ],
                  (sqlTxn, res) => {
                    _return = [0, true];
                    resolve(_return);
                  },
                  err => {
                    console.log(err.message);
                  },
                );
              });
            } else {
              _return = [2, false];
              resolve(_return);
            }
          },
          err => {
            console.log(err.message);
          },
        );
      });
    }
  });
}
