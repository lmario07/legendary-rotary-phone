const {readFile, writeFile} = require('fs').promises;
const util = require('util');
//const readFilePromise = util.promisify(readFile);
//const writeFilePromise = util.promisify(writeFile);

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    })
};

//getText('./01-intro.js')
 //   .then((result)=>console.log(result))
   // .catch((err)=>console.log(err));

const start = async() => {
    try {
        const first = await readFile('./01-intro.js', 'utf8');
        const second = await readFile('./02-globals.js', 'utf8');
        await writeFile('./result-mind-grenade2.txt', 'Awesome lm');
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
    
    
};

start();