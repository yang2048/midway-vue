'use strict';

const cfork = require('cfork');
const util = require('util');
const fs = require('fs');
const path = require('path');
const os = require('os');

// 获取 cpu 核数
const cpuNumbers = os.cpus().length;
console.info('cpu核数：' + cpuNumbers)
console.info('端口：' + process.env.PORT)

const filePath = path.resolve('./build');
//根据文件路径读取文件，返回文件列表
fs.readdir(filePath, function (err, files) {
    if (err) return console.error('Error:(spec)', err)
    files.forEach((filename) => {
        //获取当前文件的绝对路径
        const filedir = path.join(filePath, filename);
        console.log(filedir)
    });
});

cfork({
    exec: path.join(__dirname, './bootstrap.js'),
    count: cpuNumbers,
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