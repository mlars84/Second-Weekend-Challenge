var express = require('express');
var bodyParser = require('body-parser');
var calcMe = require('./calc-mod');

var app = express();

// uses
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// POST
app.post('/calc', function( req, res ) {
  console.log('in calc post route', req.body);

  var respObj = { answer: calcMe(req.body) };

  res.send( respObj );
  res.send( 200 );
});

app.listen( 3012, function() {
  console.log('listening on 3012');
});
