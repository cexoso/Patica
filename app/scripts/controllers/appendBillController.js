angular.module('paticaApp')
  .controller('appendBillController',['$scope','$modalInstance',function(s,$modalInstance){
        s.ok = function () {
            $modalInstance.close("hello");
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        }; 
}])
