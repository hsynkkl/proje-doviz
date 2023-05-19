import {openDatabase} from 'react-native-sqlite-storage';

export default function setDataToDB(data, values) {
  return new Promise(resolve => {
    kayitVar = false;
    const db = openDatabase({
      name: 'rn_sqlite',
    });
    // db.transaction(txn => {
    //   txn.executeSql(
    //     `SELECT * FROM kullanicilar ORDER BY id DESC`,
    //     [],
    //     (sqlTxn, res) => {
    //       console.log('categories retrieved successfully');
    //       let len = res.rows.length;

    //       if (len > 0) {
    //         let results = [];
    //         for (let i = 0; i < len; i++) {
    //           let item = res.rows.item(i);
    //           results.push({
    //             id: item.id,
    //             name: item.name,
    //             surname: item.surname,
    //             tc: item.identifyNo,
    //             telefon: item.phoneNo,
    //             sifre: item.password,
    //           });
    //           console.log(res.rows.item(i));
    //         }
    //         console.log(results);
    //       }
    //     },
    //     error => {
    //       console.log('error on getting categories ' + error.message);
    //     },
    //   );
    // });
    // db.transaction(txn => {
    //   txn.executeSql(
    //     `DROP TABLE kullanicilar`,
    //     [],
    //     (sqlTxn, res) => {
    //       console.log('tablo silindi');
    //     },
    //     error => {
    //       console.log('error on creating table ' + error.message);
    //     },
    //   );
    // });
    // db.transaction(txn => {
    //   txn.executeSql(
    //     `DELETE FROM kullanicilar`,
    //     [],
    //     (sqlTxn, res) => {
    //       alert('Kullanicilar silindi');

    //       setKullanici();
    //     },
    //     error => {
    //       console.log('error on adding category ' + error.message);
    //     },
    //   );
    // });

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
      txn.executeSql(`SELECT * FROM kullanicilar`, [], (sqlTxn, res) => {
        let len = res.rows.length;
        if (len >= 0) {
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);

            if (item.identifyNo == data.tckn) {
              kayitVar = true;
              break;
            }
          }
          if (kayitVar == true) {
            resolve(false);
          } else {
            db.transaction(txn => {
              txn.executeSql(
                `INSERT INTO kullanicilar (name,surname,dobd,identifyNo,phoneNo,password,photoUri) VALUES (?,?,?,?,?,?,?)`,
                [
                  data.name,
                  data.surname,
                  data.dobd,
                  data.tckn,
                  values.phoneNumber,
                  values.password,
                  data.photoUri,
                ],
                (sqlTxn, res) => {},
                error => {
                  console.log('error on adding category ' + error.message);
                },
              );
            });
            resolve(true);
          }
        }
      });
    });
  });
}

// let kayitVar = false;

// const db = openDatabase({
//   name: 'rn_sqlite',
// });

// db.transaction(txn => {
//   txn.executeSql(
//     `CREATE TABLE IF NOT EXISTS kullanicilar (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, surname TEXT,dobd TEXT, identifyNo TEXT, phoneNo TEXT, password TEXT)`,
//     [],
//     (sqlTxn, res) => {},
//     error => {
//       console.log('error on creating table ' + error.message);
//     },
//   );
// });

// if (!data.name || !data.surname) {
//   alert('isim ve soyisim giriniz');
//   return false;
// }
// if (true) {
//   db.transaction(txn => {
//     txn.executeSql(
//       `SELECT * FROM kullanicilar`,
//       [],
//       (sqlTxn, res) => {
//         let len = res.rows.length;

//         if (len >= 0) {
//           for (let i = 0; i < len; i++) {
//             let item = res.rows.item(i);
//             if (item.identifyNo == data.tckn) {
//               console.log('kullanicasdi mevcut');
//               kayitVar = true;
//               break;
//             }
//           }
//           if (kayitVar == false) {
//             db.transaction(txn => {
//               txn.executeSql(
//                 `INSERT INTO kullanicilar (name,surname,dobd,identifyNo,phoneNo,password) VALUES (?,?,?,?,?,?)`,
//                 [
//                   data.name,
//                   data.surname,
//                   data.dobd,
//                   data.tckn,
//                   values.phoneNumber,
//                   values.password,
//                 ],
//                 (sqlTxn, res) => {},
//                 error => {
//                   console.log('error on adding category ' + error.message);
//                 },
//               );
//             });
//             return true;
//           } else {
//             return false;
//           }
//         }
//       },
//       error => {
//         console.log('error on getting categories ' + error.message);
//       },
//     );
//   });

// db.transaction(txn => {
//     txn.executeSql(
//       `SELECT * FROM kullanicilar ORDER BY id DESC`,
//       [],
//       (sqlTxn, res) => {
//         console.log("categories retrieved successfully");
//         let len = res.rows.length;

//         if (len > 0) {
//           let results = [];
//           for (let i = 0; i < len; i++) {
//             let item = res.rows.item(i);
//             results.push({
//                 id      : item.id,
//                 name    : item.name,
//                 surname : item.surname ,
//                 tc      : item.identifyNo,
//                 telefon : item.phoneNo,
//                 sifre   : item.password
//             });
//             console.log(res.rows.item(i))
//           }
//         //console.log(results)

//         }
//       },
//       error => {
//         console.log("error on getting categories " + error.message);
//       },
//     );
//   });
// db.transaction(txn => {
//     txn.executeSql(
//       `DROP TABLE kullanicilar`,
//       [],
//       (sqlTxn, res) => {
//         console.log("table created successfully");
//       },
//       error => {
//         console.log("error on creating table " + error.message);
//       },
//     );
//   });
// db.transaction(txn => {
//     txn.executeSql(
//       `DELETE FROM kullanicilar`,
//       [],
//       (sqlTxn, res) => {
//         alert("Kullanicilar silindi")

//         setKullanici();
//       },
//       error => {
//         console.log("error on adding category " + error.message);
//       },
//     );
//   });
