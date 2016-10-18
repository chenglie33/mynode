/**
 * Created by Administrator on 2016/10/17.
 */
angular.module("myApp").controller("articleCtrl",["$ocLazyLoad",'$scope','$http','$sce','$stateParams',function($ocLazyLoad,$scope,$http,$sce,$stateParams){
    $ocLazyLoad.load([
            "/backstage/assets/js/pages/table.js"]
    );
    $(".btn-closess").live("click",function(t){
        t.preventDefault();
         that=this;

        $('#modal-title').html('提示');
        $('#modal-content').html('你确定要删除这个文章吗');
        $('#btn-auto').html("delete");
        $('#btn-auto').addClass("delete-btn");
        $('#myModal') .modal('show');
        data_id=$(this).attr("data-id");
        //$http.post("/article/delete",{_id:$(this).attr("data-id")}).success(function(data){
        //    $(that).parent() .parent() .parent() .fadeOut();
        //})

    });
    $(".delete-btn").live("click",function(){

        $http.post("/article/delete",{_id:data_id}).success(function(data){
            if(data.error==null||undefined){
                $("#alert_content").html("添加成功");
                $("#alert").modal("show")
            }else{
                $("#alert_content").html(data.error);
                $("#alert").modal("show")
            }
            $('#myModal').modal('hide')
            $('#btn-auto').removeClass("delete-btn");
            $(that).parent() .parent() .parent() .fadeOut();
        })
    });
    $http.post('/article',{type:$stateParams.type}).success(function(data){

        for(i in data){
            data[i].contents=$sce.trustAsHtml( data[i].contents);
        }
        $scope.lists=data;
    });
    //  e(this) .parent() .parent() .parent() .fadeOut()

    $(".btn-minimize").click();
}])