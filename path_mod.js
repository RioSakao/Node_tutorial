const path = require('path')

const filePath = path.join( '/test', 'subfolder', 'somefile' )
console.log( filePath )

//returns the children
const base = path.basename( filePath )
console.log( base )

const absolute = path.resolve( __dirname )
console.log( absolute ) 
