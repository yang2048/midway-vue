<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
</script>
<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/images/logo.png" />
    <hello-world msg="Welcome to Your MIDWAY-VUE3-SSR" />
    <i class="iconfont icon-manbingxindian"></i>
    <n-row class="btn">
      <n-button>Default</n-button>
      <n-button type="tertiary">
        Tertiary
      </n-button>
      <n-button type="primary">
        Primary
      </n-button>
      <n-button type="info">
        Info
      </n-button>
      <n-button type="success">
        Success
      </n-button>
      <n-button type="warning">
        Warning
      </n-button>
      <n-button type="error">
        Error
      </n-button>
      <n-button type="warning" dashed>
        Warning
      </n-button>
      <n-button type="error" dashed>
        Error
      </n-button>
      <n-icon size="40"> </n-icon>
      <n-icon size="40" color="#0e7a0d"> </n-icon>
    </n-row>
  </div>
</template>
<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
