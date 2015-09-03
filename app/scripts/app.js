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
.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/login');
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
      }).state('index.quote',{
        url:'/quote',
        templateUrl: 'views/quote.html',
        controller:'quoteController'
      }).state('index.addPB',{
        url:'/addPB',
        templateUrl: 'views/addPB.html',
        controller:'addPBController'
      }).state('index.addDefault',{
        url:'/addDefault',
        templateUrl: 'views/addDefault.html',
        controller:'addDefaultController'
      }).state('index.addQuote',{
        url:'/addQuote',
        templateUrl: 'views/addQuote.html',
        controller:'addQuoteController'
      }).state('index.coupons',{
        url:'/coupons',
        templateUrl: 'views/coupons.html',
        controller:'couponsController'
      }).state('engineer',{
        url:'/engineer',
        templateUrl: 'views/engineer.html'
      }).state('login',{
        url:'/login',
        views:{
          '':{
            templateUrl: 'views/login.html'  
          },
          'login':{
            templateUrl: 'views/alterC.html'  
          }
        }
      })

}]);
angular.module('paticaApp').config(['$httpProvider',function($httpProvider){
  $httpProvider.interceptors.push('author');
}]);
angular.module('controller',[]);
angular.module('services',[]);



// http://www.patica.com.cn/patica/manage/orders.html