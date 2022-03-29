var express = require('express');
const bodyParser = require('body-parser');
var Frequency = require('../models/frequency');
var passport = require('passport');
var authenticate = require('../authenticate');

var router = express.Router();

router.use(bodyParser.json());


//get current frequency
router.get('/', authenticate.verifyUser, (req, res, next) => {
    Frequency.find({})
        .then((frequency) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(frequency);
        }, (err) => next(err))
        .catch((err) => next(err));
})

//update frequency value
router.put('/', authenticate.verifyUser, (req, res, next) => {
    Frequency.updateOne({}, { $set: { time: req.body.frequency } })
        .then((frequency) => {
            console.log(req.body.frequency);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(frequency);
        }, (err) => next(err))
        .catch((err) => next(err));
})


module.exports = router;
