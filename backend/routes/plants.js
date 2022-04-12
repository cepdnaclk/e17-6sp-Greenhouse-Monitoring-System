var express = require('express');
const bodyParser = require('body-parser');
var Plant = require('../models/plant');
var passport = require('passport');
var authenticate = require('../authenticate');
const upload = require('../services/imageUpload');
const singleUpload = upload.single("image");


var router = express.Router();

router.use(bodyParser.json());


router.post("/:id",authenticate.verifyUser, function (req, res) {
    const uid = req.params.id;

    console.log(process.env.AWS_ACCESS_KEY);
    console.log(process.env.AWS_ACCESS_SECRET);
  
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
  
      let update = { plantPicture: req.file.location };

      console.log(update);
  
      Plant.findByIdAndUpdate(uid, update, { new: true })
        .then((plant) => res.status(200).json({ success: true, plant: plant }))
        .catch((err) => res.status(400).json({ success: false, error: err }));
    });
  });



module.exports = router;