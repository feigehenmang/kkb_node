const clone = require('download-git-repo');

clone('github:feigehenmang/vue-template', './test/', function(err,data){
    console.log(err, data)
});