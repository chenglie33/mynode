/**
 * Created by Administrator on 2016/10/14.
 */
var express = require('express');
var articleDao=require('./../dao/ArticleDao');
var router = express.Router();
router.post("/addArticle",function(req,res,next){
    articleDao.saveArticle(req,res,next);
    return;
});
router.post("/",function(req,res,next){
    articleDao.getAllArticle(req,res,next);
});
router.post("/delete",function(req,res,next){
    articleDao.deleteArticle(req,res,next)
})
module.exports=router;