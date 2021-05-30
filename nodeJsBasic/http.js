const http = require('http');
http.createServer((request, response) => {
    const responseChain = getPrototypeChain(response);
    console.log(responseChain.length)
    response.end('HELLO');
}).listen(3000)
function getPrototypeChain(obj) {
    var chain = [];
    while(obj) {
        chain.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return chain;
}