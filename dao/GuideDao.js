/**
 * Created by Administrator on 2016/9/27.
 */
var DaoBase = require('./BaseDao'),
    models = require('./../models'),
    Guide = models.Guides;
var guideDao = new DaoBase(Guide);

exports.getAllGuide=function(req, res,next,callback){

    guideDao.getAll(function(err,model){
      callback(err,model)
    });
};
exports.addGuide=function(req, res,next,callback){
    console.error(req.body)
    guideDao.create(req.body,function(err){
        if(typeof callback=='function'){
                callback(err);
        }else{
            console.log("this is err")
        }
    });
};
//插入子数组方法
exports.updateGuide=function(req, res,next,callback){
    guideDao.update(req.body.query,{ $addToSet: {sNames:req.body.arr}},{},callback)
};
exports.updateRemoveGuide=function(req, res,next,callback){
    guideDao.update(req.body.query,{ $pull: req.body.arr},{},callback)
};
exports.removeGuide=function(req, res,next,callback){
    guideDao.delete(req.body.condition,callback);
}
//一，$美元符号，在update中，可理解为数组下标
//一，$美元符号，在update中，可理解为数组下标
//三，$pop删除数组数据
//四，$pull和$pullAll删除指定数据
//五，$push,$each,$sort,$slice,$position
//1，各元素解释
//$push 向数组中添加元素
//$each 循环数据
//$sort 对数组进行排序
//$slice 对整个collection表进行数据裁减，用的时候一定要当心
//$position 插入数据的位置。