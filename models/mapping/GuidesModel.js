/**
 * Created by Administrator on 2016/9/27.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var schema=new Schema({
    fname:String,
    fhref:String,
    sNames:[{sname:String,shref:String}]
});
mongoose.model('Guides', schema);