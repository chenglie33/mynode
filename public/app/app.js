'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).controller('banner',[function(){
  $('.banner').unslider({
    autoplay: false,
    fluid: false,
    arrows: false,
    dots: false,               //  Display dot navigation

  });
}]).controller("nav",['$scope',function($scope){
   // $('#dropdown1').dropdown('toggle');
}]).controller("project",["$interval",function($interval){
  function timeshow(){
    var date=new Date();
    var hour,min,sec,hours,mins,secs;
    hour=date.getHours();
    if(hour>12){
      hour=hour-12;
    }
    min=date.getMinutes();
    sec=date.getSeconds();
    hours=hour*30+270;
    mins=min*6+270;
    secs=sec*6+270;
    $(".sec").css({'transform':'rotate('+secs+'deg)'});
    $(".hour").css({'transform':'rotate('+hours+'deg)'});
    $(".min").css({'transform':'rotate('+mins+'deg)'});
  }
  $interval(timeshow,1000);
$(".box-x").click(function(){
  var num=$(this).attr("data-index");
  switch (num){
    case "1":
          $("#myt").html("柏禧官网")
          $("#myb").html("柏禧网络科技有限公司官网<br>传送门:<a href='http://www.byheetech.com/'>click here</a>");
          $('#myModal').modal('show')
          break;
    case "2":
      $("#myt").html("柏禧智能插座众筹")
      $("#myb").html("柏禧智能插座众筹项目，从前台到后台的所有开发<br>传送门:<span href=''>传送门损坏 后台项目或项目已经下架</span>");
      $('#myModal').modal('show')
      break;
    case "3":
      $("#myt").html("一元夺宝项目")
      $("#myb").html("蜘蛛网络科技有限公司的一元夺宝项目，环境为大屏广告机以及安卓盒子，主要负责后台系统的开发以及后台页面<br>传送门:<span href=''>传送门损坏 后台项目或项目已经下架</span>");
      $('#myModal').modal('show')
      break;
    case "4":
      $("#myt").html("爱炫购")
      $("#myb").html("爱炫购商城的后台开发，项目由于资金问题被终止<br>传送门:<span href=''>传送门损坏 后台项目或项目已经下架</span>");
      $('#myModal').modal('show')
      break;
    case "5":
      $("#myt").html("微信开发")
      $("#myb").html("参与微信的二次开发，包括微商城以及耳机分销，（微信号：蜘蛛实体店）<br>传送门:<span href=''>无</span>");
      $('#myModal').modal('show')
      break;
    case "6":
      $("#myt").html("剑侠奇缘答题器")
      $("#myb").html("外接项目剑侠奇缘答题器，使用框架AngularJs，将在后续放入传送门<br>传送门:<span href=''>无</span>");
      $('#myModal').modal('show')
      break;
    case "7":
      $("#myt").html("div画图")
      $("#myb").html("使用div，利用css3特性画图<br>传送门:<a href='/app/draw/cat.html'>click here</a>");
      $('#myModal').modal('show')
      break;
  }

});

  $(".box-x").mouseover(function(){
    var num=$(this).attr("data-index");
    switch (num) {
      case "1":
        $("#titlem").html("柏禧官网")
        $("#titlec").html("柏禧网络科技有限公司官网<br>传送门:<a href='http://www.byheetech.com/'>click here</a>");

        break;
      case "2":
        $("#titlem").html("柏禧智能插座众筹")
        $("#titlec").html("柏禧智能插座众筹项目，从前台到后台的所有开发<br>传送门:<span href=''>传送门损坏 后台项目或项目已经下架</span>");

        break;
      case "3":
        $("#titlem").html("一元夺宝项目")
        $("#titlec").html("蜘蛛网络科技有限公司的一元夺宝项目，环境为大屏广告机以及安卓盒子，主要负责后台系统的开发以及后台页面<br>传送门:<span href=''>传送门损坏 后台项目或项目已经下架</span>");

        break;
      case "4":
        $("#titlem").html("爱炫购")
        $("#titlec").html("爱炫购商城的后台开发，项目由于资金问题被终止<br>传送门:<span href=''>传送门损坏 后台项目或项目已经下架</span>");

        break;
      case "5":
        $("#titlem").html("微信开发")
        $("#titlec").html("参与微信的二次开发，包括微商城以及耳机分销，（微信号：蜘蛛实体店）<br>传送门:<span href=''>无</span>");

        break;
      case "6":
        $("#titlem").html("剑侠奇缘答题器")
        $("#titlec").html("外接项目剑侠奇缘答题器，使用框架AngularJs，将在后续放入传送门<br>传送门:<span href=''>无</span>");

        break;
      case "7":
        $("#titlem").html("div画图")
        $("#titlec").html("使用div，利用css3特性画图<br>传送门:<a href='/app/draw/cat.html'>click here</a>");

        break;
    }
  })
}]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).run(function(){
      window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)',
        white:'rgb(255,255,255)',
        Spring:'rgb(254,193,87)',
        Hibernate:"rgb(237,79,164)",
        Mysql:"rgb(240,0,1)",
        Java:"rgb(161,197,91)"
      };
      var config = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.5,
              0.5,

            ],
            backgroundColor: [
              window.chartColors.red,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      var config1 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.7,
              0.3,

            ],
            backgroundColor: [
              window.chartColors.orange,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      var config2 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.8,
              0.2,

            ],
            backgroundColor: [
              window.chartColors.blue,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      var config3 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.5,
              0.5,

            ],
            backgroundColor: [
              window.chartColors.green,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      var config4 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.5,
              0.5,

            ],
            backgroundColor: [
              window.chartColors.Spring,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      var config5 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.5,
              0.5,

            ],
            backgroundColor: [
              window.chartColors.Hibernate,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      var config6 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.5,
              0.5,

            ],
            backgroundColor: [
              window.chartColors.Mysql,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      var config7 = {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [
              0.5,
              0.5,

            ],
            backgroundColor: [
              window.chartColors.Java,
              window.chartColors.white,

            ],
            label: 'Dataset 1'
          }], labels: [
            "熟练度",
            "空白",

          ]
        },
        options: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'java'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      };
      window.onload=function(){
        var ctx = document.getElementById("Node").getContext("2d");
        var ctx1 = document.getElementById("AngularJs").getContext("2d");
        var ctx2 = document.getElementById("Jquery").getContext("2d");
        var ctx3 = document.getElementById("Ionic").getContext("2d");
        var ctx4 = document.getElementById("Spring").getContext("2d");
        var ctx5 = document.getElementById("Hibernate").getContext("2d");
        var ctx6 = document.getElementById("Mysql").getContext("2d");
        var ctx7 = document.getElementById("Java").getContext("2d");
        window.myDoughnut = new Chart(ctx, config);
        window.myDoughnut = new Chart(ctx1, config1);
        window.myDoughnut = new Chart(ctx2, config2);
        window.myDoughnut = new Chart(ctx3, config3);
        window.myDoughnut = new Chart(ctx4, config4);
        window.myDoughnut = new Chart(ctx5, config5);
        window.myDoughnut = new Chart(ctx6, config6);
        window.myDoughnut = new Chart(ctx7, config7);

      }

    });
