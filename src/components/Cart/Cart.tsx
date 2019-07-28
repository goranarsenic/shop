import React from "react";

import CartProduct from "./CartProduct";

import { ICartStore, ICartProduct } from "../../types/cart";

import "./Cart.scss";

interface IProps {
  cart: ICartStore;
  closeModal: () => void;
  updateQuantity: (sku: number, quantity: number) => any;
  removeProduct: (sku: number) => any;
}

const Cart = (props: IProps) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <button type="button" onClick={props.closeModal}>
          X
        </button>
      </div>
      {props.cart.products.length ? (
        <>
          <div className="cart-items-container">
            <div className="cart-items-header">
              <p className="name">Name</p>
              <p className="quantity">Quantity</p>
              <p className="price">Price</p>
              <p className="total">Total</p>
            </div>
            {props.cart.products.map((product: ICartProduct) => (
              <CartProduct
                key={product.sku}
                product={product}
                updateQuantity={props.updateQuantity}
                removeProduct={props.removeProduct}
              />
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-total-container">
              <p>TOTAL:</p>
              <p className="cart-total">{props.cart.total}$</p>
            </div>
          </div>
        </>
      ) : (
        <div className="no-products-message">
          <p>There is no products in cart.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
