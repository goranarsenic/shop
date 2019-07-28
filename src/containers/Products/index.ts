import { ICartStore } from "./../../types/cart";
import { IProductsStore } from "../../types/products";
import { connect } from "react-redux";
import { productsActions, cartActions } from "../../actions";

import Products from "../../components/Products";

interface IState {
  products: IProductsStore;
  cart: ICartStore;
}

const mapStateToProps = (state: IState) => {
  return {
    ...state.products,
    cart: state.cart
  };
};

const mapDispatchToProps = {
  ...productsActions,
  ...cartActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
