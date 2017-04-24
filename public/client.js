$( document ).ready( onReady );
console.log( 'JQ' );

// event listeners
function onReady() {
  operatorFunc();
  sendUserData();
  $( '#clearButton' ).on( 'click', clearFunc );
} // end onReady

function operatorFunc() {
  console.log('in operatorFunc');
  $( '#operatorButton' ).append( '<button id="add" type="button" >+</button>' );
  $( '#operatorButton').append( '<button id="subtract" type="button" >-</button>' );
  $( '#operatorButton' ).append( '<button id="multiply" type="button" >*</button>' );
  $( '#operatorButton' ).append( '<button id="divide" type="button" >/</button>' );
}

console.log($( '#inputOne' ).val()); // logging undefined
console.log($( '#inputTwo' ).val()); // logging undefined


function sendUserData(){
  var userInputs = {
    xNum: $( '#inputOne' ).val(),
    yNum: $( '#inputTwo' ).val(),
    operator: $( '#operatorButton' ).text() // can't seem to figure out how to send operator info...
 };
 console.log( userInputs ); // logging the object as {x: "", y "", operator: "+-*/"}

 $.ajax({
   url: '/data',
   type: 'POST',
   data: userInputs,
   success: function( response ){
     console.log( response ); // logging a response of the object without actual data
   }
 });

 $.ajax({
   url: '/result',
   type: 'GET',
   success: function( response ) {
     console.log( response );
   }
  });
} // end sendUserData

function clearFunc() {
  $( '#inputOne' ).empty();
  $( '#inputTwo' ).empty();
  $( '#total' ).empty();
  console.log( 'clearFunc' );
} // end clearFunc
