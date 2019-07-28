import React, { Component } from "react";
import Product from "./Product";
import Modal from "../Modal";
import Cart from "../Cart";
import Filters from "../Filters";

import { IProduct, IFilter } from "../../types/products";
import { ICartStore, ICartProduct } from "../../types/cart";

import "./Products.scss";

interface IProps {
  searchText: string;
  products: IProduct[];
  cart: ICartStore;
  isFetching: boolean;
  error: string | undefined;
  filters: IFilter[];
  changeFilter: (filter: string) => any;
  searchProducts: (searchText: string, filters: IFilter[]) => any;
  addProduct: (product: ICartProduct) => any;
  removeProduct: (sku: number) => any;
  updateQuantity: (sku: number, quantity: number) => any;
  toggleCartModal: () => any;
  toggleFilter: (name: string) => any;
}

interface IState {
  searchText: string;
}

class Products extends Component<IProps, IState> {
  state = {
    searchText: ""
  };

  render() {
    const {
      isFetching,
      error,
      products,
      searchText,
      toggleCartModal,
      cart,
      updateQuantity,
      removeProduct,
      filters,
      toggleFilter
    } = this.props;

    return (
      <div className="container">
        <div className="header-container">
          <div className="logo-container">
            <p>Online Shop</p>
          </div>
          <div className="cart-button-container">
            <button type="button" className="btn" onClick={toggleCartModal}>
              Cart
            </button>
          </div>
        </div>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
              value={this.state.searchText}
            />
            <button type="submit" className="btn">
              Search
            </button>
          </form>
        </div>
        <Filters filters={filters} toggleFilter={toggleFilter} />
        {isFetching && this.renderLoader()}
        {error && this.renderError(error)}
        {!isFetching && !error && this.renderProducts(products, searchText)}
        {cart.isCartShown && (
          <Modal closeModal={toggleCartModal}>
            <Cart
              closeModal={toggleCartModal}
              cart={cart}
              updateQuantity={updateQuantity}
              removeProduct={removeProduct}
            />
          </Modal>
        )}
      </div>
    );
  }

  private renderLoader = () => {
    return (
      <div className="loader-container">
        <p>Loading...</p>
      </div>
    );
  };

  private renderError = (error: string) => {
    return (
      <div className="error-container">
        <p>{error}</p>
      </div>
    );
  };

  private renderProducts = (products: IProduct[], searchText: string) => {
    return (
      <div className="products-container">
        {!!searchText.length && (
          <div className="product-search-info-container">
            <p>
              Results for: <span className="search-text">{searchText}</span>
            </p>
          </div>
        )}
        {!!products.length && (
          <div className="products">
            {products.map((product: IProduct) => (
              <Product
                key={product.sku}
                product={product}
                onAddToCart={this.handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  /** HANDLERS */
  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchText: event.target.value
    });
  };

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchText = this.state.searchText;
    if (searchText.length) {
      this.props.searchProducts(searchText, this.props.filters);
    }
  };

  private handleAddToCart = (product: IProduct) => {
    const existingCartProduct = this.props.cart.products.find(
      (cartProduct: ICartProduct) => cartProduct.sku === product.sku
    );

    if (existingCartProduct) {
      this.props.updateQuantity(
        existingCartProduct.sku,
        existingCartProduct.quantity + 1
      );
    } else {
      this.props.addProduct({
        sku: product.sku,
        name: product.name,
        price: product.salePrice,
        quantity: 1,
        total: product.salePrice
      });
    }
  };
}

export default Products;
