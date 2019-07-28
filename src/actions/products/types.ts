import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  TOGGLE_FILTER
} from "../../constants/products";
import { IProduct } from "../../types/products";

export interface IGetProducts {
  type: typeof GET_PRODUCTS;
  searchText: string;
}
export interface IGetProductsSuccess {
  type: typeof GET_PRODUCTS_SUCCESS;
  products: IProduct[];
}
export interface IGetProductsError {
  type: typeof GET_PRODUCTS_ERROR;
  error: string;
}

export interface IChangeFilter {
  type: typeof TOGGLE_FILTER;
  filter: string;
}

export type ProductsActions =
  | IGetProducts
  | IGetProductsSuccess
  | IGetProductsError
  | IChangeFilter;
