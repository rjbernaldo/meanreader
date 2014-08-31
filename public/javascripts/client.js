window.onload = function() {
  init();
}
function init() {
  var socket = io.connect('/');

  socket.on('engadget', function(data) {
    console.log('engadget', data);
  });
  socket.on('techcrunch', function(data) {
    console.log('techcrunch', data);
  });
  socket.on('hackernews', function(data) {
    console.log('hackernews', data);
  });
}
