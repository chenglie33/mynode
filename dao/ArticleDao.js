/**
 * Created by Administrator on 2016/10/14.
 */
var DaoBase = require('./BaseDao'),
    models = require('./../models'),
    Article = models.Articles;
var articleDao = new DaoBase(Article);
exports.saveArticle=function(req,res,next){

    if(req.session.name!="tests"){
        console.info(req.session.name)
        res.send({error:"暂无权限"});
        return;
    }
    var callback=function(err,doc){
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
        res.end();

    }
    articleDao.create(req.body,callback);
    return;
};
exports.getAllArticle=function(req,res,next){
    var callback=function(err,doc){
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
        res.end();
    }
    articleDao.getByQuery(req.body,callback);
};
exports.deleteArticle=function(req,res,next){
    if(req.session.name!="tests"){
        console.info(req.session.name)
        res.send({error:"暂无权限"});
        return;
    }
    var callback=function(err,doc){
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
        res.end();
    }
    articleDao.delete(req.body,callback);
}