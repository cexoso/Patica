'use strict';

angular
  .module('paticaApp', [
    'ui.router',
    'controller'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/state1/list');
     // $stateProvider.state('index', {
     //    url: '/index',
     //    views: {
     //      '': {
     //        templateUrl: 'views/index.html',
     //        controller:'indexController'
     //      } 
     //    }
     //  })
  //    $stateProvider.state('a ', {
  //       url:'/a',
  //       templateUrl: 'views/index.html'
  //     }).
  //    state('ab',{
  //       url:'/b/:id',
  //       templateUrl: 'views/customerService.html',
  //       controller:function($stateParams){
  //         console.log($stateParams)
  //       }
  //    })
  
 $stateProvider
    .state('state1', {
      url: "/state1",
      template: "123<div ui-view=''></div>"
    }).state('state1.list', {
      url: "/list",
      template: "{{items}}",
      controller: function($scope) {
        $scope.items = 'iii';
      }
    })
    
  });

// angular.module('paticaApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
//      $stateProvider.state('a ', {
//         url:'/a',
//         templateUrl: 'views/index.html'
//       }).
//      state('a.b',{
//         url:'/b',
//         templateUrl: 'views/customerService.html'
//      })
  // }])

angular.module('controller',[]);



// http://www.patica.com.cn/patica/html/index.html?openid=ohQRxs4EMc4dBVahHIY7HvvQ2XNM&user_access_token=OezXcEiiBSKSxW0eoylIeKgL0Csc5Fk-ftXOSB6u_ubDy-sXqSiiI98l2784Y5uMrHrNF4W4zBeG4aPxU3kbFG502-quHHSFlDR2c72MYLpe5fJXcBYLKcPMTQyF9uWJPZeSDcDnYrz0EB9rrukY6Q