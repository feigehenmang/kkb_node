const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');
const download = require('../utils/download');
const promisify = require('../utils/index');
const log = content => console.log(chalk.red(content));
// 子进程信息发送至主进程
const spawn = async (...args) => {
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () => {
            resolve()
        })
    })
}
module.exports = async (name, ...args) => {
    clear();
    const data = await promisify(figlet)("Welcome Init Project");
    log(data);
    log('🚗创建项目 Start ' + name);
    await download(name)
    log('安装依赖')
    await spawn('cnpm', ['install'], { cwd: `./${name}` })
    log(`
    👌安装完成：
    To get Start:
    ===========================
        cd ${name}
        npm run serve
    ===========================
                `)
    const open = require('open')
    open('http://localhost:8080')
    await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}