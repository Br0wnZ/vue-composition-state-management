<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'

import useCart from '../store/useCart'

import type { IProduct } from '../models/product'

const { addToCart } = useCart()

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true
  }
})

defineEmits(['showDescription'])
</script>

<template>
  <va-card>
    <va-image :src="product.image" @click="$emit('showDescription', product)">
      <template #loader>
        <va-progress-circle indeterminate />
      </template>
    </va-image>
    <va-card-title @click="$emit('showDescription', product)">
      <h1>{{ product.title }}</h1>
    </va-card-title>
    <va-card-actions align="stretch" vertical>
      <va-button icon="shopping_cart" @click="() => addToCart(product)">Add to cart</va-button>
    </va-card-actions>
  </va-card>
</template>

<style lang="scss" scoped>
.va-card:hover {
  transform: scale(1.01);
}
</style>
