export default function checkPhotoUri(photoUri) {
  return new Promise(resolve => {
    if (photoUri === undefined) {
      resolve(false);
    } else {
      resolve(true);
    }
  });
}
