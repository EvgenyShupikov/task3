import { getBondData } from './mocks';


export const ACTION_TYPES = {
  fetchDataStart: 'fetchDataStart',
  fetchDataSuccess: 'fetchDataSuccess',
  fetchDataError: 'fetchDataError',
}


export function updateBondData(isin, interval) {
  return async function (dispatch) {
    dispatch({
      type: ACTION_TYPES.fetchDataStart
    });

    try {
      const data = await getBondData(isin, interval);
      dispatch({
        type: ACTION_TYPES.fetchDataSuccess,
        payload: data
      });
    }
    catch (ex) {
      dispatch({
        type: ACTION_TYPES.fetchDataError,
        payload: ex
      });
    }
  }
}