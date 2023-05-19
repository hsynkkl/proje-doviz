import {openDatabase} from 'react-native-sqlite-storage';

export default function filteringHistory(userId, filter) {
  return new Promise(resolve => {
    const userIdStr = userId[0].userId;
    const db = openDatabase({
      name: 'rn_sqlite',
    });
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM processHistory ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;
          let returns = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            if (item.userId == userIdStr) {
              if (filter.length == 0) {
                returns.push(item);
              } else if (filter.length > 0) {
                const filterSelectedSelling = filter[0].filterSelected[0];
                const filterSelectedBuying = filter[0].filterSelected[1];
                if (
                  filterSelectedSelling != undefined &&
                  filterSelectedBuying == undefined
                ) {
                  if (filterSelectedSelling == item.sellingCurrencyTitle) {
                    returns.push(item);
                  }
                } else if (
                  filterSelectedSelling == undefined &&
                  filterSelectedBuying != undefined
                ) {
                  if (filterSelectedBuying == item.buyingCurrencyTitle) {
                    returns.push(item);
                  }
                } else if (
                  filterSelectedSelling != undefined &&
                  filterSelectedBuying != undefined
                ) {
                  if (
                    filterSelectedBuying == item.buyingCurrencyTitle &&
                    filterSelectedSelling == item.sellingCurrencyTitle
                  ) {
                    returns.push(item);
                  }
                } else if (
                  filterSelectedSelling == undefined &&
                  filterSelectedBuying == undefined
                ) {
                  returns.push(item);
                }
              }
            }
          }
          resolve(returns);
        },
      );
    });
  });
}
