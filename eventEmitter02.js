const EventEmitter = require('events');

const customEmitter= new EventEmitter();
//el orden importa primero on que escucha y luego emito el evento

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved user ${name}  id ${id}`);
});

customEmitter.on('response', ()=>{
    console.log(`again data recieved`);
});
customEmitter.emit('response', 'lmca', 34);