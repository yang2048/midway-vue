<template>
  <div class="box">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬" class="result">
      <template #footer>
        <router-link to="/">
          <n-button>找点乐子吧</n-button>
        </router-link>
      </template>
    </n-result>
  </div>
</template>
<style>
  .box {
    position: relative;
    height: 100vh;
  }
  .result {
    text-align: center;
    top: 30%;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    border: 1px solid #dedede;
    padding: 120px;
  }
</style>