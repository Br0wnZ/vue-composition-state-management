import { reactive, computed } from "vue";
import { getAllProducts } from "../services/productsService";

import type { IProduct } from "../models/product";
import type { IProductState } from "../models/productState";


export default function useProduct() {

  const state: IProductState = reactive({
    products: [],
    isLoading: false
  })
  
  const loadProducts = async (): Promise<void> => {
    state.isLoading = true
    state.products = await getAllProducts()
    state.isLoading = false
  }
  
  const products = computed(() => state.products as IProduct[])
  
  const isLoading = computed(() => state.isLoading)

  return {
    loadProducts,
    products,
    isLoading
  }
}
