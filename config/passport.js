var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);
  passport.use('local-signup', new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true }, localSignUp));
  passport.use('local-login', new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true }, localLogin));
}

function serialize(user, done) {
  done(null, user.id);
}

function deserialize(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
}

function localSignUp(req, email, password, done) {
  process.nextTick(function() {
    User.findOne({ 'local.email': email }, function(err, user) {
      if (err)
        return done(err);

      if (user) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      } else {
        var newUser = new User();
        newUser.local.email = email;
        newUser.local.password = newUser.generateHash(password);
        newUser.save(function(err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    });
  });
}

function localLogin(req, email, password, done) {
  User.findOne({ 'local.email': email }, function(err, user) {
    if (err)
      return done(err);

    if (!user) {
      return done(null, false, req.flash('loginMessage', 'That email is already taken.'));
    }

    if (!user.validPassword(password)) {
      return done(null, false, req.flash('loginMessage', 'Oops. Wrong password.'));
    }

    return done(null, user);
  });
}
