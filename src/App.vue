<script setup lang="ts">
import { ref, watch } from 'vue'
import Products from './pages/Products.vue'
import { Navbar, Toast } from './components/'
import useCart from './store/useCart'

const { showToast } = useCart()

const visible = ref(false)

watch(showToast, (value) => visible.value = value)

</script>

<template>
  <Navbar />
  <Products />
  <Toast :visible="visible" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(128, 128, 128, 0.158);
}
</style>
