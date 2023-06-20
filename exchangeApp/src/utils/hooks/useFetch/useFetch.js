import {useState, useEffect} from 'react';
import getAccounts from '../../Functions/dbFunctions/userAccountsDB/getAccFromDB';
import {socket} from '../../../Router';
function useFetch(userIdStr) {
  const [loading, setLoading] = useState();
  const [ratesList, setRatesList] = useState();
  const [flatListData, setFlatListData] = useState();
  const getData = async () => {
    socket.on('exchange', data => {
      setRatesList(data);
      setLoading(false);
      async function fetchData() {
        return setFlatListData(await getAccounts(userIdStr));
      }
      fetchData();
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return [ratesList, loading, flatListData];
}
export default useFetch;
