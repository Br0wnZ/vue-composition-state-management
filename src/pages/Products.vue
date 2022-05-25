<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { Product, ProductModal, Loader} from '../components/'

import  useStore from '../store/useProducts' 

import type { IProduct } from '../models/product'

const { products, isLoading, loadProducts } = useStore()

const showModal: Ref<boolean> = ref(false)
const selectedProduct: Ref<IProduct> = ref({} as IProduct)

onMounted(() => {
  loadProducts()
})

const showDescription = (item: IProduct): void => {
  showModal.value = true
  selectedProduct.value = item
}
</script>

<template>
  <div class="row">
    <div class="flex md3 mb-2 pr-2" v-for="product in products" :key="product.id">
      <Product :product="product" @show-description="showDescription" />
    </div>
  </div>
  <ProductModal :product="selectedProduct" :showModal="showModal" />
  <Loader v-if="isLoading"/>
</template>

<style lang="scss" scoped>
</style>