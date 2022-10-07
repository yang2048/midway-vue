<script lang="ts" setup>
import HelloWorld from "@/components/HelloWorld.vue";

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
    <n-button-group size="small">
      <n-button type="default" round>
        <template #icon>
          <n-icon></n-icon>
        </template>
        活着<i class="iconfont icon-shirenrenzheng"></i><i class="iconfont icon-manbingxindian"></i>
      </n-button>
      <n-button type="default">
        <template #icon>
          <n-icon></n-icon>
        </template>
        其实
      </n-button>
      <n-button type="default">
        <template #icon>
          <n-icon></n-icon>
        </template>
        很好
      </n-button>
    </n-button-group>
      <n-icon size="40">
      </n-icon>
      <n-icon size="40" color="#0e7a0d">
      </n-icon>
      <n-space vertical :size="12">
        <n-alert title="Default 类型" type="default">
          <template #icon>
            <n-icon>
              <i class="iconfont icon-manbingxindian"></i>
            </n-icon>
          </template>
          Gee it's good to be back home
        </n-alert>
        <n-alert title="Info 类型" type="info">
          Gee it's good to be back home
        </n-alert>
        <n-alert title="Success 类型" type="success">
          Leave it till tomorrow to unpack my case
        </n-alert>
        <n-alert title="Warning 类型" type="warning">
          Honey disconnect the phone
        </n-alert>
        <n-alert title="Error 类型" type="error">
          I'm back in the U.S.S.R.
        </n-alert>
      </n-space>
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


