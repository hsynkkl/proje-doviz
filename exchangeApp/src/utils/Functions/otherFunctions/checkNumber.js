export default function checkNumber(number) {
  return new Promise(resolve => {
    if (number.length < 11) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
}
