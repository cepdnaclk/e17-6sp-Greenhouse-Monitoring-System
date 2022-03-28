var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken');

var config = require('./config');

exports.local = passport.use(new LocalStrategy(User.authenticate()));

//take user information
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.getToken = function(user) {
    return jwt.sign(user, config.secretKey, 
        {expiresIn: 3600});//3600 seconds
};

//options for jwt based strategy
var opts = {};
//specify how jwt token extracted from the incoming request
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts, 
    (jwt_payload, done) => {
        //done is callback
    console.log("JWT payload: ",jwt_payload);
    User.findOne({_id: jwt_payload._id}, (err, user) =>{
        if(err) {
            return done(err, false);
        }
        else if(user){
            //if user is not null
            return done(null, user);
        }
        else{
            //user not found
            return done(null, false);
        }
    });
 }));

 //verify an incoming user
exports.verifyUser = passport.authenticate('jwt',{session: false});//because we are using jwt based auth(not using sessions)

