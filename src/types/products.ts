export interface IProduct {
  sku: number;
  name: string;
  longDescription: string;
  manufacturer: string;
  modelNumber: string;
  preowned: boolean;
  customerTopRated: boolean;
  quantityLimit: number;
  onSale: boolean;
  percentSavings: string;
  regularPrice: number;
  salePrice: number;
  image: string;
}

export interface IProductsStore {
  readonly products: IProduct[];
  readonly searchText: string;
  readonly filter: string;
  readonly isFetching: boolean;
  readonly error: string | undefined;
}
