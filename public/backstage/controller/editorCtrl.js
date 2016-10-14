/**
 * Created by Administrator on 2016/9/30.
 */
angular.module('myApp').controller('editorCtrl',["$ocLazyLoad","$http","$scope",function($ocLazyLoad,$http,$scope){
    $ocLazyLoad.load([
        "/backstage/assets/js/pages/form-elements.js"]
    );

    var ue =  UE.getEditor('editor');
    $scope.type="Java";
    $scope.submit=function(){
        $scope.content=ue.getContent();

        if($scope.title==""||undefined){
            alert("标题不能为空");
            return;
        }
        if($scope.content==""||undefined){
            alert("内容不能为空");
            return;
        }
        if($scope.type==''||undefined){
            alert("类型不能为空");
            return;
        }
        var reqArr={};
        reqArr.title=$scope.title;
        reqArr.contents=$scope.content;
        reqArr.type=$scope.type;
        $http.post('/article/addArticle',reqArr).success(function(data){
           alert("添加成功")
        }).error(function(err){
            console.log(err)
        })
    }


}])
