var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);
require('./config/passport')(passport);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'test '}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var routes = require('./routes/index')(passport);
app.use('/', routes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var Watcher = require('rss-watcher');
var watcher = new Watcher('http://podcasts.engadget.com/rss.xml');
var io = require('socket.io');
watcher.on('new article', function(article) {
  io.sockets.emit('newMessage', article);
});
//
// watcher.run(function(err, articles) {
//   if (err)
//     console.log(err);
//   console.log(articles);
// });

watcher.on('stop', function() {
  console.log('feed stopped.');
});

module.exports = app;
