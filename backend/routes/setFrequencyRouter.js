var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');

var router = express.Router();

router.use(bodyParser.json());



module.exports = router;

