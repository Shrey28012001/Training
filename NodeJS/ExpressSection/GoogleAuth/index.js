const express = require('express');
const passport = require('passport');
const auth = require('./auth');
const session = require('express-session');

function isLoggedIn(req,res,next){
    req.user ? next() : res.sendStatus(401);
}


const app = express();
app.use(session({secret:'Dogs'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Authenticate with google</a>')
});


app.get('/auth/google',
    passport.authenticate('google',{scope:['email','profile']})    
);

app.get('/google/callback',
   passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failure'
   }) 
);

app.get('/auth/failure',(req,res)=>{
    res.send('Fail to Authenticate....')
})


app.get('/protected',isLoggedIn,(req,res)=>{
    //res.send(`Hello ${req.user.displayName}`)
    res.send(`Hello ${req.user.displayName}, <a href="/logout">Good bye Log out</a>`);
});

// app.get('/logout',(req,res)=>{
//     req.logOut();
//     //req.send('<a href="/logout">Good bye Log out</a>');
//    // res.redirect('/');
// })

app.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

app.listen(5000, ()=> console.log(
    "Listining on server PORT : 5000"
));