const {writeFileSync} = require('fs');

for (let index = 0; index < 10000; index++) {
    writeFileSync('./big.txt', `hello world ${index}`, { flag: 'a'});
    
}