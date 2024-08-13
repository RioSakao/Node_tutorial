const EventEmitter = require( 'events' );
const customEmitter = new EventEmitter();

customEmitter.on( 'response', () => {
	console.log( `data received`);
})

customEmitter.on( 'response', (name, id) => {
        console.log( `dara received user ${name} with id:${id}`);
}) 

customEmitter.emit('response', 'Rio', 33);
