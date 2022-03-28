var express = require('express');
const bodyParser = require('body-parser');
var Frequency = require('../models/frequency');
var passport = require('passport');
var authenticate = require('../authenticate');

var router = express.Router();

router.use(bodyParser.json());

//set frequency
router.put('/', authenticate.verifyUser, (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, status: 'frequency updated: '+req.body.frequency });
});

module.exports = router;
