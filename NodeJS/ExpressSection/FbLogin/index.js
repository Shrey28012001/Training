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
    res.send('<a href="/auth/faceBook">Authenticate with FaceBook</a>')
});


app.use('/auth/faceBook',passport.authenticate('facebook',{scope:['id', 'displayName', 'photos', 'email']}));

app.get('/facebook/callback',
    passport.authenticate('facebook',{
        successRedirect:'/loggeIn',
        failureRedirect:'/auth/failure'
    })
);

app.get('/auth/failure',(req,res)=>{
    res.send('Fail to login with Facebook.....')
})

app.get('/loggeIn', isLoggedIn,(req,res)=>{
    res.send(`Hello Facebook , <a href="/logout">Good bye Log out</a>`)
});

app.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });
  
  app.listen(4000,() => {
    console.log('Listning on port: 4000');
})

