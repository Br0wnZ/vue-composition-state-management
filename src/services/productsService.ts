import { IProduct } from "../models/product"

const getAllProducts = (): Promise<IProduct[]> =>{
  return fetch(`${import.meta.env.VITE_APP_API_URL}/products`)
    .then((res: Response) => res.json())
    .then((json: IProduct[]) => json)}

export { getAllProducts }
