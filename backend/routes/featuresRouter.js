var express = require('express');
const bodyParser = require('body-parser');

var passport = require('passport');
var authenticate = require('../authenticate');

var Plant = require('../models/plant')
var Disease = require('../models/diseases')

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



// Leaf diseases details route ./get-disease
// get all diseases of all plants
router.get('/get-disease', authenticate.verifyUser, (req, res) =>{

  var diseaseArray = [];
  Plant.find({})
  .then(plants => {
    plants.map(plant=>{
      diseaseArray.push([plant.plantID, plant.diseases]);
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(diseaseArray);

  });

});

// get all diseases of one plant
router.get('/get-disease/:plantID', authenticate.verifyUser, (req, res) =>{
  Plant.find({plantID: req.params.plantID})
  .then(plant => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(plant[0].diseases);

  });

});



// get the whole plant
router.get('/get-plant/:plantID', (req, res) =>{
  Plant.find({plantID: req.params.plantID})
  .then(plant => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(plant[0]);

  });

});

module.exports = router;
