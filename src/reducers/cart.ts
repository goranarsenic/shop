import { CartActions } from "./../actions/cart/types";
import { ICartStore, ICartProduct } from "../types/cart";

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY
} from "../constants/cart";

const initialState: ICartStore = {
  products: [],
  total: 0
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.product] };
    case REMOVE_PRODUCT:
      return state;
    case UPDATE_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: ICartProduct) => {
          if (product.sku === action.payload.sku) {
            return {
              ...product,
              quantity: action.payload.quantity
            };
          } else {
            return {
              ...product
            };
          }
        })
      };
    default:
      return state;
  }
};

export default cartReducer;
