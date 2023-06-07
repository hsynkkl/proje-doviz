import {openDatabase} from 'react-native-sqlite-storage';

export default function processHistory(
  userId,
  processDate,
  amountSold,
  ratesList,
  sellingAccountTitle,
  buyingAccounttitle,
  sellingItemShortTitle,
  buyingItemShortTitle,
) {
  return new Promise(resolve => {
    if (!amountSold || !sellingAccountTitle || !buyingAccounttitle) {
      resolve(false);
    } else {
      const userIdStr = userId[0].userId;
      var sellingRate, buyingRate;
      for (let i = 0; i < ratesList.length; i++) {
        let item = ratesList[i].id;
        if (sellingItemShortTitle == 'TL') {
          sellingRate = '1';
        }
        if (buyingItemShortTitle == 'TL') {
          buyingRate = '1';
        }
        if (item == sellingItemShortTitle) {
          sellingRate = ratesList[i].sellPrice;
        }
        if (item == buyingItemShortTitle) {
          buyingRate = ratesList[i].sellPrice;
        }
      }

      const db = openDatabase({
        name: 'rn_sqlite',
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
      // db.transaction(txn => {
      //   txn.executeSql(
      //     `DROP TABLE processHistory`,
      //     [],
      //     (sqlTxn, res) => {
      //       console.log('table created successfully');
      //     },
      //     error => {
      //       console.log('error on creating table ' + error.message);
      //     },
      //   );
      // });
      db.transaction(txn => {
        txn.executeSql(
          `INSERT INTO processHistory (userId,processDate,amountSold,sellingCurrencyRate,buyingCurrencyRate,sellingAccountId,buyingAccountId,sellingCurrencyTitle,buyingCurrencyTitle) VALUES (?,?,?,?,?,?,?,?,?)`,
          [
            userIdStr,
            processDate,
            amountSold,
            sellingRate,
            buyingRate,
            buyingAccounttitle,
            sellingAccountTitle,
            sellingItemShortTitle,
            buyingItemShortTitle,
          ],
          (sqlTxn, res) => {
            resolve(true);
          },
          error => {
            console.log('error on adding category ' + error.message);
          },
        );
      });
    }
  });
}

// db.transaction(txn => {
//   txn.executeSql(
//     `SELECT * FROM processHistory`,
//     [],
//     (sqlTxn, res) => {
//       let len = res.rows.length;

//       for (let i = 0; i < len; i++) {
//         let item = res.rows.item(i);
//       }
//     },
//     err => {
//       console.log(err.message);
//     },
//   );
// });
