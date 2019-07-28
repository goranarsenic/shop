import { IFilter } from "../types/products";

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

export const getProductsURL = (searchText: string, filters: IFilter[]) =>
  `${BASE_URL}/products(search=${searchQuery(searchText)}${filtersQuery(
    filters
  )})?show=${PRODUCT_DETAILS.join()}&pageSize=${PAGE_SIZE}&apiKey=${
    process.env.API_KEY
  }&format=json`;

const searchQuery = (searchText: string) => {
  return searchText.replace(/ /g, "&search=");
};

const filtersQuery = (filters: IFilter[]): string => {
  const query = filters
    .filter((f: IFilter) => f.value)
    .map((f: IFilter) => `${f.query}${f.value}`)
    .join("&");

  if (query.length) {
    return `&${query}`;
  }
  {
    return "";
  }
};
