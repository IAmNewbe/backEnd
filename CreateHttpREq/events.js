const {EventEmitter} = require('events');

const myEventEmitter = new EventEmitter();

const makeCoffe = ({name}) => {
    console.log(`Kopi ${name} telah dibuat`);
}
const Payment = ({Bill}) => {
    console.log(`Type of Payment: ${Bill}`);
}

myEventEmitter.on("coffee-order", makeCoffe);
myEventEmitter.on("coffee-order", Payment);
// Memicu event 'coffee-order' terjadi.
myEventEmitter.emit("coffee-order", {name: 'Arabica', Bill: 'Online'});

/**
 * output:
 * Kopi Tubruk telah dibuat!
 */