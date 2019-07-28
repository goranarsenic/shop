import * as ActionTypes from "./types";
import { ICartProduct } from "../../types/cart";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
  TOGGLE_CART_MODAL
} from "./../../constants/cart";

const addProduct = (product: ICartProduct): ActionTypes.IAddProduct => ({
  type: ADD_PRODUCT,
  product
});

const removeProduct = (sku: number): ActionTypes.IRemoveProduct => ({
  type: REMOVE_PRODUCT,
  sku
});

const updateQuantity = (
  sku: number,
  quantity: number
): ActionTypes.IUpdateQuantity => ({
  type: UPDATE_QUANTITY,
  payload: {
    sku,
    quantity
  }
});

const toggleCartModal = (): ActionTypes.IToggleCartModal => ({
  type: TOGGLE_CART_MODAL
});

export { addProduct, removeProduct, updateQuantity, toggleCartModal };
