var express = require('express');
const bodyParser = require('body-parser');

var passport = require('passport');
var authenticate = require('../authenticate');


var router = express.Router();

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Show features');
});


module.exports = router;
