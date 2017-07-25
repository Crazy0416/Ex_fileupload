var express = require('express');
var router = express.Router();
var moment = require('moment');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'myapp/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})
var upload = multer({storage : storage})

router.use(function(res, req, next){
  console.log(moment().format());
  next();
})

router.post('/upload', upload.single('file'), function(req, res){
  res.send('Uploaded : ' + req.file.filename);
  console.log(req.file);
});

router.post('/', function(req, res, next) {
  res.send('test');
});


router.get('/', function(req, res){
  res.send('hello');
})

module.exports = router;
