import * as React from "react";
import classnames from "classnames";

import { IProduct } from "../../types/products";

import { imagePlaceholder } from "../../assets/images";

import "./Products.scss";

interface IProps {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
}

const Product = (props: IProps) => {
  const handleAddToCart = () => {
    props.onAddToCart(props.product);
  };

  const regularPriceClassName = classnames("regular-price", {
    onSail: props.product.onSale
  });

  return (
    <div className="product">
      <div className="product-details">
        <div className="product-name">
          <p>{props.product.name}</p>
        </div>
        <div className="image-price-container">
          <div className="image-container">
            <img
              src={props.product.image || imagePlaceholder}
              alt={props.product.name}
            />
          </div>
          <div className="price-container">
            {props.product.onSale && (
              <div className="sale-info">
                <p>SAVE {props.product.percentSavings}%</p>
              </div>
            )}
            <p className={regularPriceClassName}>
              {props.product.regularPrice}$
            </p>
            {props.product.onSale && (
              <p className="sale-price">{props.product.salePrice}$</p>
            )}
          </div>
        </div>
      </div>
      <button type="button" className="btn" onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;
