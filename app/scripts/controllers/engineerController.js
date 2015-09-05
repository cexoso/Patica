'use strict';
angular.module('controller')
  .controller('engineerController', ['$scope','$modalInstance',function (s,$modalInstance) {
        s.engineers=[
            {name:'q',telphone:'1',code:'2',weixincode:'qwe',sex:1},
            {name:'q',telphone:'1',code:'3',weixincode:'qwe',sex:0},
            {name:'q',telphone:'1',code:'2',weixincode:'qwe',sex:1},
            {name:'q',telphone:'1',code:'3',weixincode:'qwe',sex:0},
            {name:'q',telphone:'1',code:'2',weixincode:'qwe',sex:1},
            {name:'q',telphone:'1',code:'3',weixincode:'qwe',sex:0}
        ]
        var checkedItem=null;
        s.engineerClickHandle=(function(){
            var last=null;
            return function(i){
                if(last){
                    delete last.checked;
                }
                checkedItem=angular.extend({},i,true);
                i.checked=true;
                last=i;
            }
        })();
        s.assign=function(){
            $modalInstance.close("checkedItem");
        }
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        };
}]);