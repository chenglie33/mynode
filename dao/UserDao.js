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

    if( req.session.name!=undefined&&req.session.name!="guest"){
        req.body.name= req.session.name;
        req.body.pw=req.session.pw;
    }
    if(req.session.name=="guest"){
        res.render('backstage',{name:req.session.name});
        return;
    }

    var callback=function(err,model){
        if(err){
            res.render('page-500',{message:"登录失败",error:{stack:err}})
        }else{
            if(model.length>0){
                req.session.name=req.body.name;
                req.session.pw=req.body.pw;
                res.redirect("/backstage");
            }else{
                res.render('page-500',{message:"登录失败",error:{stack:"用户账号密码错误"}})
               // res.send({status:1,info:"用户账号密码错误"});
            }
        }
    }
    userDao.getByQuery(req.body,callback)
}
exports.loginOut=function(req,res,next){
    req.session.name=undefined;
    req.session.pw=undefined;
    res.redirect("/");
}