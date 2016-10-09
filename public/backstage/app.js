/**
 * Created by Administrator on 2016/9/28.
 */
var app=angular.module('myApp',['ui.router',"oc.lazyLoad"])
app .config(["$stateProvider","$urlRouterProvider","$locationProvider","$ocLazyLoadProvider","Modules_Config", function($stateProvider,$urlRouterProvider,$locationProvider,$ocLazyLoadProvider,Modules_Config) {
    $ocLazyLoadProvider.config({
        debug:false,
        events:false,
        modules:Modules_Config
    });
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('/',{
            url:"/",
            views:{
                    '':{
                        templateUrl:"/backstage/template/test.html",
                        controller:"View1Ctrl"
                    }
             },
            resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load("/backstage/controller/test.js");
                    }]
            }
        })
            .state("editor",{
                url:"/editor",
                views:{
                    "":{
                        templateUrl:"/backstage/template/editor.html",
                        controller:"editorCtrl"
                    }
                },
                resolve:{
                    deps:["$ocLazyLoad",function($ocLazyLoad){
                        return $ocLazyLoad.load(["timeplug",
                            "x_editor",
                            "/backstage/controller/editorCtrl.js",

                        ]);
                    }]
                }

            })




    }]);
app.constant("Modules_Config",[{
    name:"timeplug",
    module:true,
    files:[
        "/backstage/assets/plugins/bootstrap-datepicker/css/datepicker3.css",
        "/backstage/assets/plugins/bootstrap-datepicker/css/datepicker-theme.css",
        "/backstage/assets/plugins/bootstrap-timepicker/css/bootstrap-timepicker.css",
        "/backstage/assets/plugins/bootstrap-colorpicker/css/bootstrap-colorpicker.css",
        "/backstage/assets/plugins/bootstrap-tagsinput/css/bootstrap-tagsinput.css",
        "/backstage/assets/plugins/touchpunch/js/jquery.ui.touch-punch.min.js",
        "/backstage/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js" ,
        "/backstage/assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.js",
        "/backstage/assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js",
        "/backstage/assets/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.js",
        "/backstage/assets/plugins/maskedinput/js/jquery.maskedinput.js",
    ]
},
    {
        name:"x_editor",
        module:true,
        files:[
            "/backstage/assets/plugins/summernote/css/summernote.css",
            "/backstage/assets/plugins/summernote/css/summernote-bs3.css",
            "/backstage/assets/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css",
            "/backstage/assets/plugins/summernote/js/summernote.js",
            "/backstage/assets/plugins/bootstrap-markdown/js/bootstrap-markdown.js",
            "/backstage/assets/plugins/bootstrap-markdown/js/markdown.js",
            "/backstage/assets/plugins/bootstrap-markdown/js/to-markdown.js"
        ]
    }

])

