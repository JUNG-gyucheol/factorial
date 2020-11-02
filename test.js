let http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request,response) {
        let pathname = url.parse(request.url).pathname;
        console.log('request for ' + pathname +'received');

        route(handle , pathname,response);
        
    }
    http.createServer(onRequest).listen(3000);

    console.log('server has started');
}
exports.start = start;



// http.createServer(function handler(req,res){

//     res.writeHead(200,{'Content-Type' : 'text/plain'});
//     res.end('node js start');
// }).listen(3000);
// function factorial(n){
//     if(n === 1){
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// console.log(factorial(20));