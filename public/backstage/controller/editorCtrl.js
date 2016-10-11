/**
 * Created by Administrator on 2016/9/30.
 */
angular.module('myApp').controller('editorCtrl',["$ocLazyLoad",function($ocLazyLoad){
    $ocLazyLoad.load([
        "/backstage/assets/js/pages/form-elements.js"]
    );

    var ue =  UE.getEditor('editor');

}])
