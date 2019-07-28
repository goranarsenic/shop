import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
  TOGGLE_CART_MODAL
} from "./../../constants/cart";
import { ICartProduct } from "../../types/cart";

export interface IAddProduct {
  type: typeof ADD_PRODUCT;
  product: ICartProduct;
}
export interface IRemoveProduct {
  type: typeof REMOVE_PRODUCT;
  sku: number;
}
export interface IUpdateQuantity {
  type: typeof UPDATE_QUANTITY;
  payload: {
    sku: number;
    quantity: number;
  };
}

export interface IToggleCartModal {
  type: typeof TOGGLE_CART_MODAL;
}

export type CartActions =
  | IAddProduct
  | IRemoveProduct
  | IUpdateQuantity
  | IToggleCartModal;
