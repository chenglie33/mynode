'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).controller('banner',[function(){
  $('.banner').unslider({
    autoplay: true,
    fluid: true,
    arrows: false,
    dots: true,               //  Display dot navigation

  });
}]).controller("nav",['$scope',function($scope){




   // $('#dropdown1').dropdown('toggle');
}]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
