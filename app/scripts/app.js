'use strict';

angular
  .module('paticaApp', [
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'controller',
    'services'
])
.config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/index');
     $stateProvider.state('manage', {
        url:'/manage',
        templateUrl: 'views/manage.html',
        controller:'manageController'
      }).state('index', {
        url:'/index',
        templateUrl: 'views/index.html',
        controller:'indexController'
      }).state('index.order', {
        url:'/manage',
        templateUrl: 'views/manage.html',
        controller:'manageController'
      })
});

angular.module('controller',[]);
angular.module('services',[]);



// http://www.patica.com.cn/patica/manage/orders.html