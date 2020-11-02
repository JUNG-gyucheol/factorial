const server = require('./test');
const router = require('./route');
const requestHandler = require('./requestHandler');

server.start(router.route, requestHandler.handle);