'use strict';

angular
  .module('paticaApp', [
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



// http://www.patica.com.cn/patica/html/index.html?openid=ohQRxs4EMc4dBVahHIY7HvvQ2XNM&user_access_token=OezXcEiiBSKSxW0eoylIeKgL0Csc5Fk-ftXOSB6u_ubDy-sXqSiiI98l2784Y5uMrHrNF4W4zBeG4aPxU3kbFG502-quHHSFlDR2c72MYLpe5fJXcBYLKcPMTQyF9uWJPZeSDcDnYrz0EB9rrukY6Q