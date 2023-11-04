const http = require('http');
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('WELCOME TO THE WORLD OF CI/CD !!! :) UJ --- >> ujjjj\n');
});

server.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});

module.exports = server;