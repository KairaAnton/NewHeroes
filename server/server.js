const http = require('http');
const app = require('./app');


const PORT = 5000;


const server = http.createServer(app);

server.listen(5000, () => { console.log('server is running') })