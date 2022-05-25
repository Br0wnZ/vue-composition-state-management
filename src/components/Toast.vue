<script setup lang="ts">
import { defineProps, PropType } from 'vue'

defineProps({
  visible: {
    type: Boolean as PropType<boolean>,
    required: true
  }
})
</script>

<template>
  <div v-if="visible" id="snackbar">Product added to cart</div>
</template>

<style lang="scss" scoped>
#snackbar {
  min-width: 250px;
  margin-left: -125px;
  background-color: rgb(41, 63, 136);
  color: #fff;
  text-align: center;
  border-radius: 50px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }

  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }

  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }

  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }

  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>