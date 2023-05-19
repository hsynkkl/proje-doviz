import {openDatabase} from 'react-native-sqlite-storage';

export default function firstRun() {
  return new Promise(resolve => {
    const db = openDatabase({
      name: 'rn_sqlite',
    });

    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS userAccounts (id INTEGER PRIMARY KEY AUTOINCREMENT,userId TEXT, accountType TEXT,currencyType TEXT,departmant TEXT,accountTypeText TEXT,currencyTypeText TEXT,departmantText TEXT,balance TEXT)`,
        [],
        (sqlTxn, res) => {},
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
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
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS processHistory (id INTEGER PRIMARY KEY AUTOINCREMENT,userId TEXT,processDate TEXT, amountSold TEXT,sellingCurrencyRate TEXT,buyingCurrencyRate TEXT,sellingAccountId TEXT,buyingAccountId TEXT,sellingCurrencyTitle TEXT,buyingCurrencyTitle TEXT)`,
        [],
        (sqlTxn, res) => {},
        error => {
          console.log('error on creating table ' + error.message);
        },
      );
    });
  });
}
