require('dotenv').config();

const express = require('express');
const { join } = require('path');
const passport = require('passport');
const { CookieStrategy } = require('passport-cookie')
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt');

const app = express();
const { User } = require('./models');

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
passport.use(new CookieStrategy(
  function (token, done) {
    User.findByToken({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user);
    });
  }
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new CookieStrategy({
  cookieName: 'auth',
  signed: true,
  passReqToCallback: true
}, function (req, token, done) {
  User.findByToken({ token: token }, function (err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
    return done(null, user);
  });
}))

app.use(require('./routes'));

app.get("/profile",
  passport.authenticate("cookie", { session: false }),
  function (req, res) {
    res.json(req.user);
  });
  
app.get('*', (req, res) => res.sendFile(join(__dirname, 'public', 'index.html')));


require('./db')
  .then(() => app.listen(process.env.PORT || 3001))

  .catch(err => console.log(err));