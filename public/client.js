$( document ).ready();
console.log( 'JQ' );

// event listeners
function onReady() {
  $( '#add' ).on( 'click', operatorFunc );
  $( '#subtract' ).on( 'click', operatorFunc );
  $( '#multiply' ).on( 'click', operatorFunc );
  $( '#divide' ).on( 'click', operatorFunc );
  $( '#equals' ).on( 'click', equalFunc );
  $( '#clearButton' ).on( 'click', clearFunc );
}

function operatorFunc(){

}

function equalFunc() {
  
}

// $.ajax({
//   url: '/calc',
//   method: 'POST',
//   data: objectToSend,
//   success: function ( response ) {
//     console.log (response);
//   }
// });
//
// $.ajax({
//   url: '/calc',
//   method: 'GET',
//   success: function( response ) {
//     console.log( response );
//   }
// });


function clearFunc() {

}
