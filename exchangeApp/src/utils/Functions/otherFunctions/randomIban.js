export default function randomIban() {
  return new Promise(resolve => {
    let ibanFirst = (Math.floor(Math.random() * 9) + 1).toString();
    let IBAN = 'TR' + ibanFirst;
    for (let i = 0; i < 23; i++) {
      let iban = Math.floor(Math.random() * 10).toString();
      IBAN += iban;
    }
    resolve(IBAN);
  });
}
