const BASE_URL = process.env.BASE_URL;
const PRODUCT_DETAILS = [
  "sku",
  "name",
  "longDescription",
  "manufacturer",
  "modelNumber",
  "preowned",
  "customerTopRated",
  "quantityLimit",
  "onSale",
  "percentSavings",
  "regularPrice",
  "salePrice",
  "image"
];
const PAGE_SIZE = 30;

export const getProductsURL = (searchText: string) =>
  `${BASE_URL}/products(name=${searchText}*)?show=${PRODUCT_DETAILS.join()}&pageSize=${PAGE_SIZE}&apiKey=${
    process.env.API_KEY
  }&format=json`;
