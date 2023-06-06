import {openDatabase} from 'react-native-sqlite-storage';

export default function incomingMoney(userId, amount, accountType) {
  return new Promise(resolve => {
    const db = openDatabase({
      name: 'rn_sqlite',
    });
    const userIdStr = userId[0].userId.toString();
    const amountFloat = parseFloat(amount);
    let newBalance;
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM userAccounts`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;

          for (let i = 0; i < len; i++) {
            const item = res.rows.item(i);
            if (userIdStr === item.userId) {
              if (item.currencyTypeText.includes(accountType)) {
                newBalance = parseFloat(item.balance) + amountFloat;
              }
            }
          }
          const newBalanceStr = newBalance.toString();

          const accountTypeLowerCase = accountType.toLowerCase();
          db.transaction(txn => {
            txn.executeSql(
              `UPDATE userAccounts SET balance = ? WHERE userId = ? AND currencyType = ?;`,
              [newBalanceStr, userIdStr, accountTypeLowerCase],
              (sqlTxn, res) => {},
              err => {
                console.log(err.message);
              },
            );
          });
        },
        err => {
          console.log(err.message);
        },
      );
    });
    resolve(true);
    // db.transaction(txn => {
    //   txn.executeSql(
    //     `SELECT * FROM userAccounts`,
    //     [],
    //     (sqlTxn, res) => {
    //       let len = res.rows.length;

    //       for (let i = 0; i < len; i++) {
    //         let item = res.rows.item(i);
    //         console.log(item);
    //       }
    //     },
    //     err => {
    //       console.log(err.message);
    //     },
    //   );
    // });
  });
}
