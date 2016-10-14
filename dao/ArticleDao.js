/**
 * Created by Administrator on 2016/10/14.
 */
var DaoBase = require('./BaseDao'),
    models = require('./../models'),
    Article = models.Articles;
var articleDao = new DaoBase(Article);
exports.saveArticle=function(req,res,next){
    var callback=function(err,doc){
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    }
    articleDao.create(req.body,callback);
};
exports.getAllArticle=function(req,res,next){
    var callback=function(err,doc){
        if(err){
            res.send(err);
        }else{
            res.send(doc);
        }
    }
    articleDao.getAll(callback);
}