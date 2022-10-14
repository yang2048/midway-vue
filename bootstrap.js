'use strict';

var AV = require('leanengine');

AV.init({
    appId: process.env.LEANCLOUD_APP_ID,
    appKey: process.env.LEANCLOUD_APP_KEY,
    masterKey: process.env.LEANCLOUD_APP_MASTER_KEY
});
// 如果不希望使用 masterKey 权限，可以删除
AV.Cloud.useMasterKey();

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.run();
