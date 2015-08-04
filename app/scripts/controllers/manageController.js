'use strict';

angular.module('paticaApp')
  .controller('manageController', ['$scope','$resource',function (s,$resource) {
        $resource
        s.orderList=[
            {name:13},
            {name:13},
            {name:13},
            {name:13},
            {name:13},
            {name:13}
        ]
}]);
