const http = require('http');

const server = http.createServer();
//podes hacerlo asi con el on (por extender EventEmitter) o directo en el createServer
server.on('request', (req, res)=>{
    if(req.url==='/'){
        res.end('Welcome');
    }else if(req.url === '/about'){
        res.end('about');
    }
   
});

server.listen(3000);