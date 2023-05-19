export default function currencyTypeTextSplit(currency) {
  return new Promise(resolve => {
    const insideCurrency = currency;
    //console.log(insideCurrency);
    const words = insideCurrency.split(' ');
    const shortTitle = words[0];
    var longTitle = '';
    for (let index = 2; index < words.length; index++) {
      longTitle += words[index] + ' ';
    }
    const titles = [shortTitle, longTitle];
    resolve(titles);
  });
}
