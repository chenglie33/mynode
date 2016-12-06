//forever重启node
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var session = require('express-session');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ueditor = require("ueditor")
var routes = require('./routes/routes');


var app = express();

// view engine setup

app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirnasme, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
       secret: '12345',
       name: 'nodeapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
       cookie: {maxAge: 60000*60*8 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
       resave: false,
       saveUninitialized: true,
     }));
//app.use(express.Router);

app.use(routes)
app.use("/backstage/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
  // ueditor 客户发起上传图片请求
  if (req.query.action === 'uploadimage') {
    var foo = req.ueditor;

    var imgname = req.ueditor.filename;

    var img_url = '/images/ueditor/';
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    res.setHeader('Content-Type', 'text/html');//IE8下载需要设置返回头尾text/html 不然json返回文件会被直接下载打开
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = '/images/ueditor/';
    res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {

    res.setHeader('Content-Type', 'application/json');
    res.redirect('../../backstage/ueditor/nodejs/config.json');
  }
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('page-404', {
    message: err.message,
    error: err
  });
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('page-500', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('page-500', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
