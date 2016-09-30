var express = require('express');
var router = express.Router();
var userDao=require("./../dao/UserDao");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/getAll',function(req, res, next){
  userDao.getAll(req, res, next);
});
router.post('/addUser',function(req, res, next){
  userDao.addUser(req, res, next)
})
module.exports = router;
