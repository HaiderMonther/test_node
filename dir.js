const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./App');
const EventEmitter = require('events');
class Emitter extends EventEmitter {}; 

const MyEmitter = new Emitter();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    let path;

    if (req.url === '/' || req.url === 'index.html'){
        res.statusCode =200 ;
        res.setHeader('Content-type', 'text/html');
        path = path.join(__dirname, 'views', 'index.html')
        fs.readFileSync(path, 'utf8',(err , data) => {
            res.end(data);
        });
    }
});

server.listen(PORT, ()=> console.log(
    `Server running on port ${PORT}`
));


// MyEmitter.on('log', (msg) => logEvents(msg));

//     MyEmitter.emit('log', 'log event emitted!');
