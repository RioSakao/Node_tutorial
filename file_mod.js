const { readFileSync, writeFileSync } = require( 'fs' )

//const file = readFileSync( "./tmpfile.txt", "utf8" )
/*
writeFileSync( 
	'./tmpfile.txt',
	'Hello World\n',
	{ flag: 'a' } //append
)
*/
const { readFile, writeFile } = require( 'fs' );
readFile( './tmpfile.txt', 'utf8', ( err, result ) => {
	if( err ) {
		console.log( err );
		return;
	}
	console.log( result );
})
