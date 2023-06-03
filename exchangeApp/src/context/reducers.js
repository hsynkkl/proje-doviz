export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVLIST':
      const {fav} = action.payload;
      const newList = [...state.favList, fav];
      return {...state, favList: newList};
    case 'CLEAN_LIST':
      return {...state, favList: []};
    case 'CLEAN_USERIDLIST':
      return {...state, userIdList: []};
    case 'GET_USERID':
      const userId = action.payload;
      const newUserId = [...state.userIdList, userId];
      return {...state, userIdList: newUserId};
    case 'SET_HISTORY':
      const {process} = action.payload;
      const newHistoryList = [...state.processHistory, process];
      return {...state, processHistory: newHistoryList};
    case 'SET_ACCDATAS':
      const accDatas = action.payload;
      const newAccDatas = [...state.accDatasList, accDatas];
      return {...state, accDatasList: newAccDatas};
    case 'CLEAN_ACCDATAS':
      return {...state, accDatasList: []};
    case 'SET_FILTER_SELECTED':
      const filterSelected = action.payload;
      const newSelectedDatas = [filterSelected];
      return {...state, filterSelectedList: newSelectedDatas};
    case 'SET_PHOTO_URI':
      const photoUri = action.payload;
      const newPhotoUri = [photoUri];
      return {...state, photoUriList: newPhotoUri};
    case 'SET_ACCTYPES':
      const accTypesDatas = action.payload;
      const newAccTypesDatas = [accTypesDatas];
      return {...state, accTypesDatasList: newAccTypesDatas};
    case 'CLEAN_ACCTYPES':
      return {...state, accTypesDatasList: []};
    case 'SET_ITEMID':
      const itemId = action.payload;
      const newItemId = [itemId];
      return {...state, itemIdList: newItemId};
    case 'CLEAN_ITEMID':
      return {...state, itemIdList: []};
    case 'SET_FLATLISTDATA':
      const datas = action.payload;
      const flatlistData = [datas];
      return {...state, newFlatlistData: flatlistData};
    case 'CLEAN_FLATLISTDATA':
      return {...state, newFlatlistData: []};
    case 'SET_ALERTVALUE':
      const value = action.payload;
      return {...state, alertValueList: value};
    case 'CLEAN_ALERTVALUE':
      return {...state, alertValueList: []};
    default:
      return state;
  }
}
