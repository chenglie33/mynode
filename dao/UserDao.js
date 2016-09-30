/**
 * Created by Administrator on 2016/9/21.
 */
var DaoBase = require('./BaseDao'),
    models = require('./../models'),
    User = models.Users;

var userDao = new DaoBase(User);

exports.getAll=function(req, res,next){

    userDao.getAll(function(err,model){
        if(err!=null){
            res.render("error",{message:err});
        }else{
            res.send(model);
        }
    });
};
exports.addUser=function(req, res,next){
   // console.error(req.body)
    userDao.create(req.body,function(err){
   //     console.log(err)
        res.send(err);
    });
};