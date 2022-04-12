var express = require('express');
const bodyParser = require('body-parser');
var Plant = require('../models/plant');
var passport = require('passport');
var authenticate = require('../authenticate');
const upload = require('../services/imageUpload');
const singleUpload = upload.single("image");


var router = express.Router();

router.use(bodyParser.json());


router.post("/:plantID",authenticate.verifyUser, function (req, res, next) {
    const uid = req.params.id;

    singleUpload(req, res, function (err) {
      if (err) {
        return res.json({
          success: false,
          errors: {
            title: "Image Upload Error",
            detail: err.message,
            error: err,
          },
        });
      }
  
      var update = { plantPicture: req.file.location };

      // console.log(update);
      
      Plant.updateOne({ plantID: req.params.plantID }, {
        $set: {
          imageUrl: update.plantPicture
        }
      }).then((plant)=> {
        // console.log("updated plant - ");
        // console.log(plant);
        res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true,
                status: 'image updated!',
                imageUrl: update.plantPicture});
        }, (err) => next(err))
        .catch((err)=> next(err));
      })

  });



module.exports = router;