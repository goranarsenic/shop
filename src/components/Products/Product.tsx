import * as React from "react";
import { IProduct } from "../../types/products";

interface IProps {
  product: IProduct;
  onAddToCart: (product: IProduct) => void;
}

const Product = (props: IProps) => {
  const handleAddToCart = () => {
    props.onAddToCart(props.product);
  };
  return (
    <div className="product">
      <h2>{props.product.name}</h2>
      <p>{props.product.longDescription}</p>
      <p>{props.product.manufacturer}</p>
      <p>{props.product.modelNumber}</p>
      <p>{props.product.preowned}</p>
      <p>{props.product.customerTopRated}</p>
      <p>{props.product.quantityLimit}</p>
      <p>{props.product.onSale}</p>
      <p>{props.product.percentSavings}</p>
      <p>{props.product.regularPrice}</p>
      <p>{props.product.salePrice}</p>
      <img src={props.product.image} width={100} alt={props.product.name} />
      <button type="button" onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;
