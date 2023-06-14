import {openDatabase} from 'react-native-sqlite-storage';

export default function transferingMoney(userId, amount, accountTypeSelling) {
  return new Promise(resolve => {
    if (!amount || !accountTypeSelling) {
      resolve(false);
    } else {
      const userIdStr = userId[0].userId.toString();
      const amountFloat = parseFloat(amount);
      const db = openDatabase({
        name: 'rn_sqlite',
      });
      let value = false;
      db.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM userAccounts`,
          [],
          (sqlTxn, res) => {
            let len = res.rows.length;
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              if (userIdStr === item.userId) {
                if (item.currencyTypeText.includes(accountTypeSelling)) {
                  const balanceFloat = parseFloat(item.balance);
                  if (amountFloat > balanceFloat) {
                    value = false;
                  } else {
                    value = true;
                    const accountTypeSellingLowerCase =
                      accountTypeSelling.toLowerCase();

                    const newBalanceSelling = (
                      balanceFloat - amountFloat
                    ).toString();

                    db.transaction(txn => {
                      txn.executeSql(
                        `UPDATE userAccounts SET balance = ? WHERE userId = ? AND currencyType = ?;`,
                        [
                          newBalanceSelling,
                          userIdStr,
                          accountTypeSellingLowerCase,
                        ],
                        (sqlTxn, res) => {},
                        err => {
                          console.log(err.message);
                        },
                      );
                    });
                  }
                }
              }
            }
            resolve(value);
          },
          err => {
            console.log(err.message);
          },
        );
      });
    }
  });
}
