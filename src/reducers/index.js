import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import products from "./productReducer";

const appReducer = combineReducers({
  ajaxCallsInProgress,
  products,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  // if (action.type == types.LOGOUT) {
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
