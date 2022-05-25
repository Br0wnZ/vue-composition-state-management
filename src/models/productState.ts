import { IProduct } from './product'

export interface IProductState {
  products: IProduct[]
  isLoading: boolean
}
