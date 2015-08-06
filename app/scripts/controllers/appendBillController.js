angular.module('paticaApp')
  .controller('appendBillController',['$scope','$modalInstance','$http',function(s,$modalInstance,$http){
        var loadData =(function(){
            var baseUrl='/data/orderinfo/';
            return function(url,params){
                $http.get(baseUrl+url,angular.extend({cache:true},{params:params}));
            }
        })();
        
        loadData('brandList.json',{id:1});
        loadData('brandList.json',{id:2});
        

        




        s.ok = function () {
            $modalInstance.close("hello");
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        }; 
}])
