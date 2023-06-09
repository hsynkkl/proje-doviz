export default function checkLoginValues(name, surname, dobd) {
  return new Promise(resolve => {
    if (name.length === 0 || surname.length === 0 || dobd.length === 13) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
}
