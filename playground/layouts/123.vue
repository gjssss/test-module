<script lang="ts" setup>
</script>

<template>
  <div>
    Nuxt module playground!
    <hr>
    <nav clas="nav">
      <NuxtLink class="link" to="/">
        Home
      </NuxtLink>
      <NuxtLink class="link" to="/composables">
        composables
      </NuxtLink>
      <NuxtLink class="link" to="/components">
        components
      </NuxtLink>
      <NuxtLink class="link" to="/pages">
        pages
      </NuxtLink>
    </nav>
    <hr>
    <slot />
  </div>
</template>

<style>
.link{
  position: relative;
  margin: 2px;
}
</style>
