import { ACTION_TYPES } from './actions';


const defaultState = {
  data: [],
  loading: false,
  lastErrorText: undefined
}


export default (state = defaultState, action) => {
  switch (action.type) {

    // LOAD
    case ACTION_TYPES.fetchDataStart:
      return {
        ...state,
        loading: true,
        lastErrorText: undefined
      }

    case ACTION_TYPES.fetchDataSuccess:
      return {
        ...state,
        data: action.data,
        loading: false
      }

    case ACTION_TYPES.fetchDataError:
      return {
        ...state,
        data: [],
        loading: false,
        lastErrorText: action.payload.message
      }

    default:
      return state;
  }
}



