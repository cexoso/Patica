angular.module('paticaApp')
  .controller('appendBillController',['$scope','$modalInstance','$http',function(s,$modalInstance,$http){
        var loadData =(function(){
            return function(url,params){
                $http.get(url,angular.extend({cache:true},{params:params}));
            }
        })();
        
        loadData('/data/repairorder.json');


        




        s.ok = function () {
            $modalInstance.close("hello");
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        }; 
}])
