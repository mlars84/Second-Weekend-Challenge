// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

//globals

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// server
app.listen( 3000, function(){
  console.log( 'server up on:', 3000 );
});

// objectToSend in a POST
app.post('/calc', function() {
  res.sendStatus( 200 ):
});

// GET
app.get('/calc', function(){
  
});
