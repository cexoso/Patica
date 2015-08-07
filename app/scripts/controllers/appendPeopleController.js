'use strict';
angular.module('controller')
  .controller('appendPeopleController', ['$scope','$modalInstance',function (s,$modalInstance) {
        s.ok = function () {
            $modalInstance.close("ok");
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        };
}]);