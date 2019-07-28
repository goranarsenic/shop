import { IProductsStore, IFilter } from "../types/products";
import { ProductsActions } from "../actions/products/types";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  TOGGLE_FILTER
} from "../constants/products";

const initialState: IProductsStore = {
  products: [],
  searchText: "",
  filters: [
    {
      name: "isOnSale",
      value: false,
      query: "onSale=",
      label: "On Sale"
    },
    {
      name: "isPreowned",
      value: false,
      query: "preowned=",
      label: "Preowned"
    },
    {
      name: "isCustomerTopRated",
      value: false,
      query: "customerTopRated=",
      label: "Top Rated"
    }
  ],
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
    case TOGGLE_FILTER:
      return {
        ...state,
        filters: state.filters.map((filter: IFilter) => {
          if (filter.name === action.filter) {
            return {
              ...filter,
              value: !filter.value
            };
          } else {
            return {
              ...filter
            };
          }
        })
      };
    default:
      return state;
  }
}

export default productsReducer;
