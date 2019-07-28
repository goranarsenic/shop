import { combineReducers } from "redux";

import cartReducer from "./cart";
import productsReducer from "./products";

const createRootReducer = () =>
  combineReducers({
    cart: cartReducer,
    products: productsReducer
  });

export default createRootReducer();
