// // server/index.js

// const express = require("express");

// const PORT = process.env.PORT || 3001;



// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
//   });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });
// const express = require('express');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// const app = express();

// // Use the GoogleStrategy within Passport.
// //   Strategies in Passport require a `verify` function, which accept
// //   credentials (in this case, an accessToken, refreshToken, and Google
// //   profile), and invoke a callback with a user object.
// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     // asynchronous verification, for effect...
//     process.nextTick(function () {
//       // To keep the example simple, the user's Google profile is returned to
//       // represent the logged-in user.  In a typical application, you would want
//       // to associate the Google account with a user record in your database,
//       // and return that user instead.
//       return done(null, profile);
//     });
//   }
// ));

// // configure Express to use passport
// app.use(passport.initialize());

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

//   app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
//   });
  