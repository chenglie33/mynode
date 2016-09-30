var express = require('express');
var router = express.Router();
var GuideDao=require("./../dao/GuideDao");

/* GET users listing. */

router.post('/getAll',function(req, res, next){
    var callback=function(err,model){
        if(err!=null){
            res.render("error",{message:err});
        }else{

            res.send(model);
        }
    }
   GuideDao.getAllGuide(req, res, next,callback);

});
router.post('/addGuide',function(req, res, next){
    GuideDao.addGuide(req, res, next,function(msg){
            res.send(msg);
    });
});
router.post('/updateGuide',function(req, res, next){
    var callback=function(error){
        if(error){
            res.render("error",{message:error});
        }else{
            res.send("ok");
        }
    }
    GuideDao.updateGuide(req, res, next,callback);
});
router.post('/updateRemoveGuide',function(req, res, next){
    var callback=function(error){
        if(error){
            res.render("error",{message:error});
        }else{
            res.send("ok");
        }
    }
    GuideDao.updateRemoveGuide(req, res, next,callback);
});
router.post('/removeGuide',function(req,res,next){
    var callback=function(error){
        if(error){
            res.render("error",{message:error});
        }else{
            res.send("ok");
        }
    }
    GuideDao.removeGuide(req,res,next,callback)
})
module.exports = router;
