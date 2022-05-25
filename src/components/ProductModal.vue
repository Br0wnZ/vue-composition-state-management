<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import useCart from '../store/useCart'

import type { IProduct } from '../models/product'

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
    default: true
  },
  showModal: {
    type: Boolean,
    required: true,
    default: true
  }
})

const { addToCart } = useCart()
</script>

<template>
  <va-modal v-model="showModal" size="small" hide-default-actions>
    <template #header>
      <h2>{{ product.title }}</h2>
    </template>
    <va-image :src="product.image">
      <template #loader>
        <va-progress-circle indeterminate />
      </template>
    </va-image>
    <p>{{ product.description }}</p>
    <template #footer>
      <va-button icon="shopping_cart" @click="() => addToCart(product)">
        Add to cart
      </va-button>
    </template>
  </va-modal>
</template>


<style lang="scss" scoped>
</style>