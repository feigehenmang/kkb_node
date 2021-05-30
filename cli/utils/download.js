const download = require('./index')(require('download-git-repo'));
const ora = require('ora');

module.exports = async desc => {
    const process = ora('下载中....' + desc);
    process.start();
    await download('github:feigehenmang/vue-template', desc)
    process.succeed();
}