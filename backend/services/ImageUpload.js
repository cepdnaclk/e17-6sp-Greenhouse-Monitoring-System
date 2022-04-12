const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
require('dotenv').config();
const s3 = new aws.S3();



aws.config.update({
    AWS_SDK_LOAD_CONFIG:1,
    apiVersion: 'latest',
    region: "ap-southeast-1",
    credentials: {
        accessKeyId: 'Accesse Key',
        secretAccessKey: 'Secrect Key'
      }
  });



//validates the file type
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
};


//setup Multer to process the image and send it to the S3 bucket
const upload = multer({
    fileFilter,
    storage: multerS3({
      acl: "public-read",
      s3,
      bucket: "greenhouse-plant-pictures",	
      metadata: function (req, file, cb) {
        cb(null, { fieldName: "TESTING_METADATA" });
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString());
      },
    }),
  });

  module.exports = upload;