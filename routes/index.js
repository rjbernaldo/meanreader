var express = require('express');
var router = express.Router();
var Article = require('../models/article');

module.exports = function(passport) {
  router.get('/', isLoggedIn, function(req, res) {
    res.render('home', { user: req.user });
  });

  router.post('/user', function(req, res) {
    if (req.user)
      res.end(JSON.stringify(req.user));
  })

  router.post('/articles', function(req, res) {
    Article.find(function(err, as) {
      res.end(JSON.stringify(as.reverse()));
    });
  })

  router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile', { user: req.user });
  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.get('/auth/twitter', passport.authenticate('twitter'));

  router.get('/auth/twitter/callback', passport.authenticate('twitter', {
    failureRedirect: '/',
    successRedirect: '/'
  }));

  return router;
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.render('index');
  }
}
