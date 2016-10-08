
var path = require('path');
var router = require('express').Router();

var GuideDao=require("./../dao/GuideDao");

router.get("/",function(req,res, next){
  var callback=function(err,model){
    if(err!=null){
      res.render("error",{message:err});
    }else{
      //res.send('Hello');
     // res.redirect("index")
      res.render('index',{items:model});
    }
  }
  GuideDao.getAllGuide(req, res, next,callback);

});
exports.index = router;