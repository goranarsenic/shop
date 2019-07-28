export interface ICartProduct {
  sku: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export interface ICartStore {
  readonly products: ICartProduct[];
  readonly total: number;
  readonly isCartShown: boolean;
}
