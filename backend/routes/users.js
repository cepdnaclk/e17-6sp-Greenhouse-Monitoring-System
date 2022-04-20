var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require('../authenticate');


var router = express.Router();

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', authenticate.verifyUser, function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!', user: user});
      });
    }
  });
});

//user login route "/login"
router.post('/login', passport.authenticate('local'), (req, res) => {
  var token = authenticate.getToken({_id: req.user._id});
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true,
            status: 'You are successfully logged in!',
            token: token});
});


router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/'); //redirect to home page
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

//user profile details route "/getinfo"
router.get('/getinfo', authenticate.verifyUser, (req, res) =>{
  //get user profile details
  User.findById(req.user._id, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true,  user: user});
    }
});
});

//update user info route "/updateinfo"
router.put('/updateinfo', authenticate.verifyUser, (req, res) =>{
  //find user details using user id
  User.findByIdAndUpdate(req.user._id, {$set: req.body}, {new: true}, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true,
                status: 'Updated Successfully',
                user: user});
    }
});
});

module.exports = router;
