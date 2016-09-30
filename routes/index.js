
var express = require('express');
var router = express.Router();
var index=require('./index');
var GuideDao=require("./../dao/GuideDao");
router.get("/",function(req,res, next){
  var callback=function(err,model){
    if(err!=null){
      res.render("error",{message:err});
    }else{

      res.render('index',{items:model});
    }
  }
  GuideDao.getAllGuide(req, res, next,callback);

});
exports.index = router;