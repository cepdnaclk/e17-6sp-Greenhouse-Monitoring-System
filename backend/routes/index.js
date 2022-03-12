const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.route('/')
.all((req,res,next) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  next();
})
.get((req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
