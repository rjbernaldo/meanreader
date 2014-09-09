var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/user');

var configAuth = require('./auth');

module.exports = function(passport) {
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);
  passport.use(new TwitterStrategy({
    consumerKey: configAuth.twitterAuth.consumerKey,
    consumerSecret: configAuth.twitterAuth.consumerSecret,
    callbackURL: configAuth.twitterAuth.callbackURL
  }, twitterAuth));
}

function serialize(user, done) {
  done(null, user._id);
}

function deserialize(id, done) {
  User.findById(id, function(err, user) {
    if (err)
      done(err, null);
    done(err, user);
  });
}

function twitterAuth(token, tokenSecret, profile, done) {
  console.log(token, tokenSecret, profile, done);

  profile.token = token;
  profile.tokenSecret = tokenSecret;

  process.nextTick(function() {
    User.findOne({ 'twitter.id': profile.id }, function(err, user) {
      if (err)
        return done(err);

      if (user) {
        return done(null, user);
      } else {
        var newUser = new User();
        newUser.twitter.id = profile.id;
        newUser.twitter.token = token;
        newUser.twitter.username = profile.username;
        newUser.twitter.displayName = profile.displayName;

        newUser.save(function(err) {
          if (err)
            throw err;

          return done(null, newUser);
        });
      }
    });
  });
}
