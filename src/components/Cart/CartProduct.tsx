import * as React from "react";
import { ICartProduct } from "../../types/cart";

interface IProps {
  product: ICartProduct;
  updateQuantity: (sku: number, quantity: number) => any;
  removeProduct: (sku: number) => any;
}

const CartProduct = (props: IProps) => {
  const handleDecreaseQuantity = () => {
    if (props.product.quantity === 1) {
      props.removeProduct(props.product.sku);
    }
    props.updateQuantity(props.product.sku, props.product.quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    props.updateQuantity(props.product.sku, props.product.quantity + 1);
  };

  return (
    <div className="cart-product">
      <p className="name">{props.product.name}</p>
      <div className="quantity">
        <button type="button" onClick={handleDecreaseQuantity}>
          -
        </button>
        <p>{props.product.quantity}</p>
        <button type="button" onClick={handleIncreaseQuantity}>
          +
        </button>
      </div>
      <p className="price">{props.product.price}$</p>
      <p className="total">{props.product.total}$</p>
    </div>
  );
};

export default CartProduct;
