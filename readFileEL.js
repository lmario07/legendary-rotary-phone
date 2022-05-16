const {readFile} = require('fs');

console.log('First task');

readFile('./01-intro.js', 'utf8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('First task completed');
});

console.log('new task');