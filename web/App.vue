<template>
  <router-view  v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>
</template>
<script setup lang="ts">
 
</script>
<style lang="scss">

  </style>