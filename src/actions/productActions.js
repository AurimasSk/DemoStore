import { beginAjaxCall } from "./ajaxStatusActions";
import productApi from "../api/mockProductApi";
import * as types from "./actionTypes";

export function loadProductsSuccess(products) {
    return { type: types.GET_ALL_PRODUCTS_SUCCESS, products };
}

export function loadProductSuccess(product) {
  return { type: types.GET_PRODUCT_SUCCESS, product };
}

export function getAllProducts() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return productApi.getAllProducts().then(products => {
            dispatch(loadProductsSuccess(products));
        }).catch(error => {
            throw (error);
        });
    };
}

export function getProductById(productId) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return productApi.getProductById(productId).then(product => {
      dispatch(loadProductSuccess(product));
    }).catch(error => {
      throw (error);
    });
  };
}
