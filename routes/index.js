var express = require('express');
var router = express.Router();
var Article = require('../models/article');

module.exports = function(passport) {
  router.get('/', function(req, res) {
    var articles = [];
    Article.find(function(err, as) {
      res.render('index', { articles: as });
    });
  });

  router.get('/login', function(req, res) {
    res.render('login', { message: req.flash('loginMessage') });
  });

  router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }))

  router.get('/signup', function(req, res) {
    res.render('signup', { message: req.flash('signupMessage') })
  });

  router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  router.get('/profile', function(req, res) {
    res.render('profile', { user: req.user });
  });

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  return router;
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
}
