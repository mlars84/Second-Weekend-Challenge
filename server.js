// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var calcMod = require( './calc-mod' );

//globals
var xNum = '';
var yNum = '';
var answer = '';

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// server
app.listen( 3015, function(){
  console.log( 'server up on:', 3015 );
});

// objectToSend in POST
app.post( '/data', function( req, res ) {
  var data = req.body;
  objectToSend = {
    xNum: data.inputOne,
    yNum: data.inputTwo,
    operator: data.operatorButtons
  };
  console.log(objectToSend);
});

app.get( '/result', function ( req, res ) {

});
