<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>
  </n-config-provider>
</template>
<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui'


</script>
<style lang="scss">

</style>