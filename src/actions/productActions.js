import { beginAjaxCall } from "./ajaxStatusActions";
import productApi from "../api/mockProductApi";
import * as types from "./actionTypes";

export function loadProductsSuccess(products) {
    return { type: types.GET_ALL_PRODUCTS_SUCCESS, products };
}

export function getAllProducts() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return productApi.getAllProducts().then(products => {
            console.log("I'm in action", products);
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            throw (error);
        });
    };    
}