var express = require('express');
var router = express.Router();
var emailExistence = require('email-existence');
var validFormat = require('validator');

/* Check valid email */
router.post('/v1/email/verify', function(req, xres) {

  email = req.body.email;

  emailExistence.check(email, function(err,res){
    xres.json({"valid": res});
    });

  });


module.exports = router;
