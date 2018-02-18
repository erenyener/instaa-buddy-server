var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', function(req, res) {

  if(req.files.image){
    var fileGettingUploaded = req.files.image.path;

    cloudinary.uploader.upload(fileGettingUploaded, function(result) {
        res.send(result);
    });
  }else{
      res.status(400).send({ error: 'image should be send with image key on form' })
  }  

});



module.exports = router;
