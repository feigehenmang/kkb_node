#!/usr/bin/env node
const program = require('commander');
const package = require('../package');
program.version(package.version)

program.command('init <name>')
.description('init project')
.action(require('../lib/init'));

program.command('generate <name>')
.description('generate <name>')
.action(require('../lib/generate'));
program.parse(process.argv)
