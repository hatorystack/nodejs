const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log('first callback - ', args);
};
emitter.on('event', callback1);

emitter.on('event', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('event', { message: 1 });
emitter.emit('event', { message: 2 });
// emitter.removeListener('event', callback1);
emitter.removeAllListeners();
emitter.emit('event', { message: 3 });
