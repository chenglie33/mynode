
var express = require('express');
var router = express.Router();


router.get("/",function(req,res, next){


            res.render('backstage',{name:req.session.name});


});
exports.index = router;