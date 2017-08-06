import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    productReducer
});

export default rootReducer;
