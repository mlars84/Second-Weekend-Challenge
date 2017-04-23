$(document).ready();
console.log('JQ');

// event listeners
function onReady() {

}



function clearFunc() {

}

$.ajax({
  url: '/calc',
  method: 'POST',
  data: objectToSend,
  success: function (response) {
    console.log (response);
  }
});

$.ajax({

})
