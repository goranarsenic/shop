import { CartActions } from "./../actions/cart/types";
import { ICartStore, ICartProduct } from "../types/cart";

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
  TOGGLE_CART_MODAL
} from "../constants/cart";

const initialState: ICartStore = {
  products: [],
  total: 0,
  isCartShown: false
};

const cartReducer = (state = initialState, action: CartActions) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
        total: Math.round(state.total + action.product.price * 100) / 100
      };
    case REMOVE_PRODUCT:
      const filteredCartProducts = state.products.filter(
        (product: ICartProduct) => product.sku !== action.sku
      );
      return {
        ...state,
        products: filteredCartProducts
      };
    case UPDATE_QUANTITY:
      const cartProductsNewQuantity = state.products.map(
        (product: ICartProduct) => {
          if (product.sku === action.payload.sku) {
            return {
              ...product,
              quantity: action.payload.quantity,
              total:
                Math.round(product.price * action.payload.quantity * 100) / 100
            };
          } else {
            return {
              ...product
            };
          }
        }
      );
      return {
        ...state,
        products: cartProductsNewQuantity,
        total: cartProductsNewQuantity.length
          ? Math.round(
              cartProductsNewQuantity
                .map((product: ICartProduct) => product.total)
                .reduce((total: number, productTotal: number) => {
                  return total + productTotal;
                }) * 100
            ) / 100
          : 0
      };
    case TOGGLE_CART_MODAL:
      return { ...state, isCartShown: !state.isCartShown };
    default:
      return state;
  }
};

export default cartReducer;
