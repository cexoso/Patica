'use strict';

angular
  .module('paticaApp', [
    'ngResource',
    'ui.router',
    'controller'
])
.config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/manage');
     $stateProvider.state('manage', {
        url:'/manage',
        templateUrl: 'views/manage.html',
        controller:'manageController'
      })
});

angular.module('controller',[]);



// http://www.patica.com.cn/patica/manage/orders.html