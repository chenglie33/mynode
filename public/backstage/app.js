/**
 * Created by Administrator on 2016/9/28.
 */
var app=angular.module('myApp',['ui.router',"oc.lazyLoad"])
app .config(["$stateProvider","$urlRouterProvider","$locationProvider", function($stateProvider,$urlRouterProvider,$locationProvider) {
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
                        return $ocLazyLoad.load([
                            "/backstage/assets/plugins/touchpunch/js/jquery.ui.touch-punch.min.js",
                            "/backstage/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js" ,
                            "/backstage/assets/plugins/bootstrap-timepicker/js/bootstrap-timepicker.js",
                            "/backstage/assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js",
                            "/backstage/assets/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.js",
                            "/backstage/assets/plugins/maskedinput/js/jquery.maskedinput.js",
                            "/backstage/controller/editorCtrl.js",

                        ]);
                    }]
                }

            })




    }])

