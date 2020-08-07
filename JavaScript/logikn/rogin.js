var passport = require('passport');
app.use(passport.initialize());

var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done){
   
    //ここでusername と password を確認して結果を返す
     if (なんらかのエラー) {
        return done(エラー内容);
    }
    else if (失敗) {
        return done(null, false);
    }
    else if (成功) {
        return done(null, username);
    }
}));

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/◇◇/login.html');
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login',
    passport.authenticate('local'),
    function(req, res)
    {
        // 認証成功するとここが実行される
        app.post('/login',
            passport.authenticate('local'),
            function(req, res){
                res.redirect('/◇◇');        
    }
);
