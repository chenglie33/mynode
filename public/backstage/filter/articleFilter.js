/**
 * Created by Administrator on 2016/11/18.
 */
angular.module("myApp")
    .filter('Qus',function(){
        return function(data ,query){
            var outPush=[];
            angular.forEach(data, function(v,k){

                if (v.title.indexOf(query)>=0) {

                    outPush.push(v);
                }
            });
            return outPush;
        }
    });