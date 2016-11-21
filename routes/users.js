var express = require('express');
var router = express.Router();
var userDao=require("./../dao/UserDao");

/* GET users listing. */
router.get('/', function(req, res, next) {
  if( req.session.name!=undefined){
    userDao.login(req,res,next);
  }else{
    res.render("page-login",{});
  }

});
router.get('/guest', function(req, res, next) {
    req.session.name="guest";
    res.render('backstage',{name:req.session.name});


});
router.post('/getAll',function(req, res, next){
  userDao.getAll(req, res, next);
});
router.post('/addUser',function(req, res, next){
  userDao.addUser(req, res, next);
});
router.post('/login',function(req,res,next){
  userDao.login(req,res,next);
})
router.get("/loginOut",function(req,res,next){
  userDao.loginOut(req,res,next);
})
module.exports = router;
