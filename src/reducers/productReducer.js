import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function productReducer(state = initialState.products, action) {
    console.log("Products in reducer: ", action.products)
    switch (action.type) {
        case types.GET_ALL_PRODUCTS_SUCCESS:
            return action.products;
            
        default:
            return state;    
    }
}