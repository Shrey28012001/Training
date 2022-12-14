const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const FACEBOOK_APP_ID="3432998187022206";
const FACEBOOK_APP_SECRET = '404ff43383fa0fe925c02669378efbf0';

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:4000/fb/auth",
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
      return cb(err, user);
    
  }
));

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((obj,done)=>{
    done(null,obj);
});
