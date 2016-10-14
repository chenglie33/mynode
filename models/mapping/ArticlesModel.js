/**
 * Created by Administrator on 2016/10/14.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var schema=new Schema({
    title:String,
    contents:String,
    type:String
});
mongoose.model('Articles', schema);