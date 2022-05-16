const fs =require('fs');
const http = require('http');

http.createServer(function(req,res){
    const fileStream =fs.createReadStream('./big.txt','utf8');
    fileStream.on('open',(result)=>{
        fileStream.pipe(res);
    });
    fileStream.on('error', (err)=>{
        res.end(err);
    })
}).listen(3000);