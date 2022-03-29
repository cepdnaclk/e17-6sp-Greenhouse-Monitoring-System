var express = require('express');
const bodyParser = require('body-parser');

var passport = require('passport');
var authenticate = require('../authenticate');

var Plant = require('../models/plant')

var router = express.Router();

router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Show features');
});

//user profile details route "/getinfo"
// add midlewares to check authentication
router.get('/get-yield', authenticate.verifyUser, (req, res) =>{

  var totalYield = 0;

  Plant.find({})
  .then(plants => {
    plants.map(plant=>{
      totalYield += plant.totalYield;
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(totalYield);

  });

});

router.get('/get-yield/:plantID', authenticate.verifyUser, (req, res) =>{
  Plant.find({plantID: req.params.plantID})
  .then(plant => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(plant[0].totalYield);
  });
});



// for leaf disease
router.get('/get-disease', authenticate.verifyUser, (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, status: 'user details /get-disease'});
  });
  
  router.get('/get-disease/:plantID', authenticate.verifyUser, (req, res) =>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'user details /get-disease/'+req.params.plantID});
   });

module.exports = router;
