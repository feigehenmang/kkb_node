const chalk = require("chalk");
const clear = require("clear")
const fs = require('fs');
const promisify = require('../utils/index');
const path = require('path')
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const log = content => console.log(chalk.red(content));

module.exports = async (name, ...args) => {
    clear();
    log('开始生成文件' + name + '.vue');
    const temp = await readFile("./template/layout.vue.js")
    const generateFunc = new Function('name', temp);
    log('开始写入文件 views: ' + name + '.vue');
    await writeFile('./src/views/' + name + '.vue', generateFunc(name))

}