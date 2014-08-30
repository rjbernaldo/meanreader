window.onload = function() {
  init();
}
function init() {
  var socket = io.connect('/');

  socket.on('newMessage', function(data) {
    console.log(data);
  })
}
