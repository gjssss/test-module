<script setup lang="ts">
const { data, reset, handle } = useIncrease(1)
</script>

<template>
  <div>
    <h3>composables</h3>
    {{ data }}
    <button @click="reset">
      reset
    </button>
    <button @click="handle">
      handle
    </button>
  </div>
</template>

<style>

</style>
