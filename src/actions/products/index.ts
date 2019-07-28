import axios from "axios";
import { getProductsURL } from "../../utils/endpoints";

import * as ActionTypes from "./types";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  CHANGE_FILTER
} from "../../constants/products";
import { IProduct } from "../../types/products";

const getProducts = (searchText: string): ActionTypes.IGetProducts => ({
  type: GET_PRODUCTS,
  searchText
});
const getProductsSuccess = (
  products: IProduct[]
): ActionTypes.IGetProductsSuccess => ({
  type: GET_PRODUCTS_SUCCESS,
  products
});
const getProductsError = (error: string): ActionTypes.IGetProductsError => ({
  type: GET_PRODUCTS_ERROR,
  error
});
const changeFilter = (filter: string): ActionTypes.IChangeFilter => ({
  type: CHANGE_FILTER,
  filter
});

const searchProducts = (searchText: string) => {
  return (dispatch: any) => {
    dispatch(getProducts(searchText));
    axios
      .get(getProductsURL(searchText))
      .then(response => {
        dispatch(getProductsSuccess(response.data.products));
      })
      .catch(error => {
        dispatch(getProductsError(error.message));
      });
  };
};

export { searchProducts, changeFilter };
