<script setup lang="ts">
import useCart from '../store/useCart'

const { cart } = useCart()
</script>

<template>
  <va-navbar color="primary" shape class="mb-2" >
    <template #left>
      <va-navbar-item>
        <h1>atShop</h1>
      </va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
        <va-badge :text="cart.length" overlap>
          <va-icon name="shopping_cart" />
        </va-badge>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>
