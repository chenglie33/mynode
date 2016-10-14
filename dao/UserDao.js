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
exports.login=function(req,res,next){
   // console.log(req.body)
    var callback=function(err,model){
        if(err){
            res.send(err);
        }else{
            if(model.length>0){
                req.se
                res.redirect("/backstage");
            }else{
                res.send({status:1,info:"用户账号密码错误"});
            }
        }
    }
    userDao.getByQuery(req.body,callback)
}