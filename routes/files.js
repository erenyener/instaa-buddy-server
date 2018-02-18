var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'kemal-depot', 
  api_key: '164256611369652', 
  api_secret: 'DdzoWPVaFzxH7I682ucYM7OmKyM' 
});


router.get('/', function(req, res) {

  cloudinary.v2.api.resources_by_tag("instabuddy", function(error, result){ res.send(result); });

});

router.post('/upload', function(req, res) {

  if(req.files.image){
    var fileGettingUploaded = req.files.image.path;

    cloudinary.v2.uploader.upload(fileGettingUploaded,  {tags: ['instabuddy']},
      function(error, result) {
        res.send(result);
      });

  }else{
      res.status(400).send({ error: 'image should be send with image key on form' })
  }  
});


module.exports = router;

