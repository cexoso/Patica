'use strict';
angular.module('controller')
  .controller('addQuoteController', ['$scope','$resource','$modal',function (s,resource,$modal) {
        s.addQuoteDtl=function(order){
            var modalInstance = $modal.open({
                  animation: true,
                  templateUrl: 'views/addQuoteDtl.html',
                  controller: 'addQuoteDtlController'
             });
            modalInstance.result.then(function(q){
                console.log(q)
            },function(w){
                console.log(w)
            });
        }
        s.addQuoteDtl();
}]);

angular.module('controller')
  .controller('addQuoteDtlController',['$scope','$modalInstance','$http',function(s,$modalInstance,$http){
        s.ok = function () {
            $modalInstance.close({q:1});
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        }; 
}]);

