$( document ).ready( onReady );
console.log( 'JQ' );

// event listeners
function onReady() {
  $( '#add' ).on( 'click', operatorFunc );
  $( '#subtract' ).on( 'click', operatorFunc );
  $( '#multiply' ).on( 'click', operatorFunc );
  $( '#divide' ).on( 'click', operatorFunc );
  $( '#equals' ).on( 'click', equalFunc );
  $( '#clearButton' ).on( 'click', clearFunc );
} // end onReady

function operatorFunc(){
  var userInputs = {
    xNum: $( '#inputOne' ).val(),
    yNum: $( '#inputTwo' ).val(),
    operator: $(this).on('click')
 };

 $.ajax({
   url: '/calc',
   method: 'POST',
   data: userInputs,
   success: function ( response ) {
     console.log (response);
     res.sendStatus( 200 );
   }
 });

 $.ajax({
   url: '/calc',
   method: 'GET',
   success: function( response ) {
     console.log( response );
   }
 });
} // end operatorFunc




function equalFunc() {

} // end equalFunc

function clearFunc() {
  console.log('clearFunc');
  $('#inputOne').empty();
  $('#inputTwo').empty();
  // $('#total').empty();
} // end clearFunc
