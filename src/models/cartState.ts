import { IProduct } from "./product";

export interface ICartState {
  cart: IProduct[],
  productAdded: boolean
}