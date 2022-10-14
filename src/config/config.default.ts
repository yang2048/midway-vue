import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1657263506362_2014',
  koa: {
    port: process.env.LEANCLOUD_APP_PORT || process.env.PORT || 7001
  },
} as MidwayConfig;
