export default function calculateRatesForAlert(
  ratesList,
  currencySelling,
  currencyBuying,
) {
  return new Promise(resolve => {
    let currencySellPrice = 1;
    let currencyBuyPrice = 1;
    for (let i = 0; i < ratesList.length; i++) {
      if (ratesList[i].id === currencySelling) {
        currencySellPrice = ratesList[i].sellPrice;
      }
      if (ratesList[i].id === currencyBuying) {
        currencyBuyPrice = ratesList[i].sellPrice;
      }
    }
    const kur = currencyBuyPrice / currencySellPrice;
    const _resolve =
      '1 ' + currencyBuying + ' = ' + kur.toFixed(5) + ' ' + currencySelling;
    resolve(_resolve);
  });
}
