$( document ).ready( onReady );
console.log( 'JQ' );

// event listeners
function onReady() {
  operatorFunc();
  $( '#equals' ).on( 'click' );
  $( '#clearButton' ).on( 'click', clearFunc );
} // end onReady

function operatorFunc() {
  console.log('in operatorFunc');
  $('#operatorButton').append('<button id="add" type="button" >+</button>');
  $('#operatorButton').append('<button id="subtract" type="button" >-</button>');
  $('#operatorButton').append('<button id="multiply" type="button" >*</button>');
  $('#operatorButton').append('<button id="divide" type="button" >/</button>');
}

function sendUserData(){
  var userInputs = {
    xNum: $( '#inputOne' ).val(),
    yNum: $( '#inputTwo' ).val(),
    operator: $('#operatorButton').text() // can't seem to figure out how to send operator info...
 };

 $.ajax({
   url: '/data',
   type: 'POST',
   data: userInputs,
   success: function( response ){
     console.log( response );
   }
 });

 $.ajax({
   url: '/result',
   type: 'GET',
   success: function( response ) {
     console.log(response);
   }
  });
} // end sendUserData

function clearFunc() {
  console.log('clearFunc');
  $('#inputOne').empty();
  $('#inputTwo').empty();
  // $('#total').empty();
} // end clearFunc
