/**
 * Created by Administrator on 2016/9/21.
 */
var index = require('./index');
var users = require('./users');
var guides = require('./guides');
var backstage=require('./backstage');
var express = require('express');
var app = express();
app.use('/', index.index);
app.use('/users', users);
app.use("/guide",guides);
app.use('/backstage',backstage.index);

module.exports=app;