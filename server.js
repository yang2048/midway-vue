'use strict';

var AV = require('leanengine');

// AV.init({
//     appId: process.env.LEANCLOUD_APP_ID,
//     appKey: process.env.LEANCLOUD_APP_KEY,
//     masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
// });
// // 如果不希望使用 masterKey 权限，可以删除
// AV.Cloud.useMasterKey();

const cfork = require('cfork');
const util = require('util');
const path = require('path');
const os = require('os');

// 获取 cpu 核数
const cpuNumbers = os.cpus().length;
console.info('端口：' + process.env.LEANCLOUD_APP_PORT || process.env.PORT || 7001)

cfork({
    exec: path.join(__dirname, './bootstrap.js'),
    count: 0.5,
})
    .on('fork', (worker) => {
        console.warn('[%s] [worker:%d] new worker start', Date(), worker.process.pid);
    })
    .on('disconnect', (worker) => {
        console.warn(
            '[%s] [master:%s] wroker:%s disconnect, exitedAfterDisconnect: %s, state: %s.',
            Date(),
            process.pid,
            worker.process.pid,
            worker.exitedAfterDisconnect,
            worker.state
        );
    })
    .on('exit', (worker, code, signal) => {
        const exitCode = worker.process.exitCode;
        const err = new Error(
            util.format(
                'worker %s died (code: %s, signal: %s, exitedAfterDisconnect: %s, state: %s)',
                worker.process.pid,
                exitCode,
                signal,
                worker.exitedAfterDisconnect,
                worker.state
            )
        );
        err.name = 'WorkerDiedError';
        console.error('[%s] [master:%s] wroker exit: %s', Date(), process.pid, err.stack);
    });