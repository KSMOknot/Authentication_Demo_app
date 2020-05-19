let express         = require('express'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    passport        = require('passport'),
    User            = require('./models/user'),
    LocalStrategy   = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose');
    

mongoose.set('useUnifiedTopology', true)
mongoose.connect("mongodb://localhost/auth_demo_app", { useNewUrlParser: true });


let app = express();

app.use(require("express-session")({
    secret: "BahamutZero",
    resave: false,
    saveUninitialized: false
}))

app.set('view engine', 'ejs');

app.use(passport.initialize);
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/', function(req, res){
    res.render('home');
});

app.get('/secret', function(req, res) {
    res.render('secret');
})

app.listen( port = 8000, function(){
    console.log("App has started");
});