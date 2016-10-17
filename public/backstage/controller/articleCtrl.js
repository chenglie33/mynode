/**
 * Created by Administrator on 2016/10/17.
 */
angular.module("myApp").controller("articleCtrl",["$ocLazyLoad",'$scope','$http','$sce',function($ocLazyLoad,$scope,$http,$sce){
    $ocLazyLoad.load([
            "/backstage/assets/js/pages/table.js"]
    );
    $http.post('/article',{}).success(function(data){
        $scope.lists=data;
    });

}])