# midway-vue3-ssr

## 快速入门

> 推荐使用 pnpm 构建

### 本地开发

```bash
$ pnpm i
$ pnpm dev
$ open http://localhost:8002/
```

> 推荐使用 pm2 部署 

### 部署

```bash
$ pnpm i # 安装开发期依赖
$ pnpm build # 构建项目
$ pnpm prune --production  # 移除开发依赖
$ pnpm start # 启动项目，对应的 pm2 命令为: NODE_ENV=production pm2 start ./bootstrap.js --name midway_vue3_ssr -i 4
```
