export default function isTrueIdentify(identifyNumber) {
  var toplamTek = 0;
  var toplamCift = 0;
  var rakam10 = 0;
  var rakam11 = 0;
  if (identifyNumber.length != 11) {
    return false;
  } else {
    for (let index = 0; index < 11; index++) {
      if (!(identifyNumber[index] <= 9 && identifyNumber[index] >= 0)) {
        return false;
      }
    }
    if (identifyNumber[0] == '0') {
      return false;
    } else {
      for (let index = 0; index <= 8; index += 2) {
        toplamTek += parseInt(identifyNumber[index]);
      }
      for (let index = 1; index <= 8; index += 2) {
        toplamCift += parseInt(identifyNumber[index]);
      }
      rakam10 = (7 * toplamTek - toplamCift) % 10;
      if (rakam10 != parseInt(identifyNumber[9])) {
        return false;
      } else {
        rakam11 = (toplamCift + toplamTek + rakam10) % 10;
        if (rakam11 != parseInt(identifyNumber[10])) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}
