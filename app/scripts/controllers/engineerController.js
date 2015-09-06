'use strict';
angular.module('controller')
  .controller('engineerController', ['$scope','$modalInstance','$http',function (s,$modalInstance,$http) {
        $http.post('api/order/getUserByParam',{
            type:0,
            page:{
                "size":50, 
                "index": 1
            }
        }).success(function(d){
            if(d.code!=200){
                alert(d.msg);
            }else{
                s.engineers=d.data.data;
            }
        });
        s.checkedItem=null;
        s.engineerClickHandle=(function(){
            var last=null;
            return function(i){
                if(last){
                    delete last.checked;
                }
                s.checkedItem=angular.extend({},i,true);
                i.checked=true;
                last=i;
            }
        })();
        s.assign=function(){
            $modalInstance.close(s.checkedItem);
        }
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        };
}]);