window.onload = function() {
  init();
}
function init() {
  var socket = io.connect('/');

  socket.on('engadget', function(data) {
    data.forEach(function(article) {
      console.log('engadget', article);
    });
  });
  socket.on('techcrunch', function(data) {
    data.forEach(function(article) {
      console.log('techcrunch', article);
    });
  });
  socket.on('hackernews', function(data) {
    console.log('hackernews', data);
  });
}
