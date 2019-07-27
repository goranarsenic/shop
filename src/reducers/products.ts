import { IProductsStore } from "../types/products";
import { ProductsActions } from "../actions/products/types";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  CHANGE_FILTER
} from "../constants/products";

const initialState: IProductsStore = {
  products: [],
  searchText: "",
  filter: "",
  isFetching: false,
  error: undefined
};

function productsReducer(
  state = initialState,
  action: ProductsActions
): IProductsStore {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, isFetching: true, searchText: action.searchText };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, isFetching: false, products: action.products };
    case GET_PRODUCTS_ERROR:
      return { ...state, isFetching: false, error: action.error };
    case CHANGE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

export default productsReducer;
