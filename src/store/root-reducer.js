import { combineReducers } from 'redux';
import bonds from './bonds/reducer';


const rootReducer = combineReducers({
    bonds
});


export default rootReducer;