import {openDatabase} from 'react-native-sqlite-storage';
const colors = ['#faf3e0', '#eabf9f', '#b68973', '#28527a'];

export default function getAccFromDB(userId) {
  return new Promise(resolve => {
    const colors = ['#faf3e0', '#eabf9f', '#b68973', '#28527a'];
    //console.log(ratesList);
    const db = openDatabase({
      name: 'rn_sqlite',
    });
    db.transaction(txn => {
      txn.executeSql(`SELECT * FROM userAccounts`, [], (sqlTxn, res) => {
        let len = res.rows.length;
        let accounts = [];
        let index = 0;
        if (len >= 0) {
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            const value = parseInt(item.balance);

            const name = item.currencyType.toUpperCase();

            if (userId == item.userId) {
              //console.log(typeof name);
              let value2 = 0;
              if (name === 'EUR') {
                value2 = value * 21;
              }
              if (name === 'USD') {
                value2 = value * 19;
              }
              if (name === 'GBP') {
                value2 = value * 25;
              }
              if (name === 'TL') {
                value2 = value;
              }

              accounts.push({
                id: i,
                name: name,
                value: value,
                color: colors[index],
              });
              index++;
            }
          }
          //console.log('index:(son)' + accounts.length);

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
