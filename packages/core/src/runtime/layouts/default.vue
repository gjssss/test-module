<script setup lang="ts">
import { ref } from 'vue'
import pages from '#build/valid-pages'
import { navigateTo } from '#app'

const NavPages = ref<string>(pages)
function handle(item: string) {
  // if (item === 'index')
  //   navigateTo('/')
  // navigateTo(`/${item}`)
  console.log(`/${item}`)
}
</script>

<template>
  <div>
    default
    <span v-for="item in NavPages" :key="item" @click="handle(item)">{{ item }}</span>
    <slot />
  </div>
</template>

<style></style>
