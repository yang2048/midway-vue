<script lang="ts">
import { defineComponent, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import Pagination from '@/components/Pagination/base.vue';
import { useAboutStore, IAboutState } from './store';
export default defineComponent({
  async asyncData({ store, route }) {
    const aboutStore = useAboutStore(store);
    await aboutStore.getList({ current: Number(route.query.page || 1) });
  },
});
</script>
<script lang="ts" setup>
// 读取数据
const aboutStore = useAboutStore();
const tableData = computed<IAboutState>(() => aboutStore.$state);

const route = useRoute();
const page = computed(() => route.query.page);
const updatePage = (page: number) => {
  console.info(page)
}

watch(page, () => {
  if (route.path !== '/about') {
    return;
  }
  aboutStore.getList({ current: Number(page.value || 1) });
});
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="box">
      {{ tableData.loading }}
      <n-space vertical>
        <n-spin :show="tableData.loading">
          <ul>
            <li v-for="item in tableData.list">
              <div>
                <router-link :to="{ path: '/detail', query: { id: item.id } }">
                  {{ item.title }}
                </router-link>
                <span>{{ item.addtime }}</span>
              </div>
            </li>
          </ul>
        </n-spin>
      </n-space>
      <div>
        <n-pagination :page="1" :page-count="100" />
        <pagination :total="tableData.pagination.total" :current-page="tableData.pagination.current"
          page-url="/about?page={page}"></pagination>
          
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.box {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
  text-align: left;

  ul {
    li {
      padding: 5px 0;

      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@media (max-width: 767px) {
  .box {
    padding: 15px;
  }
}
</style>
