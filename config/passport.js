const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FitbitStrategy = require("passport-fitbit-oauth2");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

/*  passport.use(
    new FitbitStrategy({
      //options for the fitbit strategy
      callbackURL: "/dashboard",
      clientID: keys.fitbit.clientID,
      clientSecret: keys.fitbit.clientSecret,
    },
      //passport callback function
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ fitbitId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));*/
};
