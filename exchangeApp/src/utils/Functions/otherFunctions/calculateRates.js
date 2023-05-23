export default function calculateRates(
  ratesList,
  currencySelling,
  currencyBuying,
  amount,
) {
  return new Promise(resolve => {
    // const deneme = Math.random() * 10;
    // const denemeStr = deneme.toFixed(0).toString();
    // console.log(denemeStr);
    // console.log(typeof denemeStr);
    let currenySellPrice = 1;
    let currenyBuyPrice = 1;
    const amountInt = parseInt(amount);
    for (let i = 0; i < ratesList.length; i++) {
      if (ratesList[i].id == currencySelling) {
        currenySellPrice = ratesList[i].sellPrice;
      }
      if (ratesList[i].id == currencyBuying) {
        currenyBuyPrice = ratesList[i].sellPrice;
      }
    }
    const value = (amountInt * currenySellPrice) / currenyBuyPrice;
    const valueStr = value.toFixed(3).toString();
    resolve(valueStr);
  });
}
