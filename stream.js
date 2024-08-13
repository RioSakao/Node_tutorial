const { createReadStream } = requite( 'fs' );
var http = requite( 'http' );
var fs = require( 'fs' );

/* 
 * default 64KB
 * last buffer - reminder
 * highWaterMark - control size
 */

const stream = createReadStream( './content/big.txt' );
stream.on( 'data', ( chunk ) => { // Event::'data'
	console.log(chunk);
})

stream.on( 'error', ( err ) => console.log(err));

http.createServer( function ( req, res ) {
	const text = fs.readFileSync( './content/big.txt', 'utf8' );
	res.end(text);
}).listen( 5000 );
