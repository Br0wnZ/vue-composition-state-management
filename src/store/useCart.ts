import { ref, Ref, computed } from 'vue'
import type { ICartState } from '../models/cartState'
import type { IProduct } from '../models/product'

const state: Ref<ICartState> = ref({
  cart: [],
  productAdded: false
})

export default function useCart() {
  const addToCart = (product: IProduct): void => {
    state.value.cart.push(product)
    toggleToast()
  }

  const toggleToast = () => {
    state.value.productAdded = true
    setTimeout(() => {
      state.value.productAdded = false
    }, 1500);
  }

  const cart = computed(() => state.value.cart)
  const showToast = computed(() => state.value.productAdded)

  return {
    addToCart,
    showToast,
    cart
  }
}
