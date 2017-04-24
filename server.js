// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var calcMod = require( './calc-mod' );

//globals
var xNum = '';
var yNum = '';
var operator = '';
// var userInputs = '';

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// server
app.listen( 3000, function(){
  console.log( 'server up on:', 3000 );
});

// objectToSend in POST
app.post( '/data', function( req, res ) {
  var data = req.body;
  var objectToSend = {
    x: data.xNum,
    y: data.yNum,
    op: data.operator
  };
  // calcMod( data.xNum, data.yNum, data.operator );
  res.send( objectToSend );
  console.log( objectToSend );
  res.sendStatus( 200 );
});

app.get( '/result', function ( req, res ) {
  // res.send(objectToSend);
});
