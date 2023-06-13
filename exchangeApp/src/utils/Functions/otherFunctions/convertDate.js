export default function convertDate(date) {
  let dateSlice = date.slice(0, 3);
  switch (dateSlice) {
    case 'Jan':
      dateSlice = 'Ocak';
      break;
    case 'Feb':
      dateSlice = 'Şubat';
      break;
    case 'Mar':
      dateSlice = 'Mart';
      break;

    case 'Apr':
      dateSlice = 'Nisan';
      break;

    case 'May':
      dateSlice = 'Mayıs';
      break;

    case 'Jun':
      dateSlice = 'Haziran';
      break;

    case 'Jul':
      dateSlice = 'Temmuz';
      break;

    case 'Aug':
      dateSlice = 'Ağustos';
      break;

    case 'Sep':
      dateSlice = 'Eylül';
      break;

    case 'Oct':
      dateSlice = 'Ekim';
      break;

    case 'Nov':
      dateSlice = 'Kasım';
      break;

    case 'Dec':
      dateSlice = 'Aralık';
      break;

    default:
      break;
  }
  const lastDate = date.slice(4, 7) + dateSlice + date.slice(6);
  return lastDate;
}
