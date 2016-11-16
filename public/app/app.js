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
}]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
