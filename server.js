// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var calcMod = require( './calc-mod' );

//globals
var xNum = '';
var yNum = '';
var total = '';

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// server
app.listen( 3000, function(){
  console.log( 'server up on:', 3000 );
});

// objectToSend in a POST
app.post( '/calc', function( req, res ) {
  console.log(req.body);
  var data = req.body;
  // total = calcMod(xNum, yNum);
  res.sendStatus( 200 );
});

// GET
app.get('/calc', function( req, res ){

});
