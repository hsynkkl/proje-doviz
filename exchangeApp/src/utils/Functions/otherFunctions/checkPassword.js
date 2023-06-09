export default function checkPassword(password) {
  return new Promise(resolve => {
    if (password.length < 8) {
      resolve(false);
    } else {
      resolve(true);
    }
    //resolve(password);
  });
}
