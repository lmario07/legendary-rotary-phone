const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url === '/'){
        res.write('Welcome to our homepage');
        res.end();
    }
    if(req.url === '/about'){
        res.write('about here');
        res.end();
    }else{
        res.write('<h1>OOOPS!</h1><p>No encontramos la pagina que buscas</p>');
        res.end();
    }

    
});

server.listen(3000);