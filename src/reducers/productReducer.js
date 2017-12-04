import * as types from '../actions/actionTypes';
import initialState from './initialState';

const defaultState = {
  products: [],
  currentProduct: {}
}

export default function productReducer(state = defaultState, action) {
    switch (action.type) {
      case types.GET_ALL_PRODUCTS_SUCCESS:
        // return Object.assign({}, state, action.products );
        return action.products;
      case types.GET_PRODUCT_SUCCESS:
        console.log("Got: ", action);  
        // return Object.assign({}, state, { currentProduct: action.product });
        // return [
        //   ...state,
        //   Object.assign({}, action.product)
        // ];
        // return { ...state, currentProduct: { ...state.currentProduct } }
        return {
          ...state,
          currentProduct: action.product
        }

        default:
            return state;
    }
}
