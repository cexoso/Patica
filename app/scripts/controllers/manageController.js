'use strict';

angular.module('paticaApp')
  .controller('manageController', ['$scope','$resource',function (s,resource) {
        var loadData=(function(){
        var orderInfo=resource('data/repairorder.json?type=:type&order_type=:order_type&orderid=:orderid&user_phone=:user_phone&order_time_from=:order_time_from&user_real_name=:user_real_name&page=:page&pagesize=:pagesize');    
            return function (o){
                return orderInfo.get(o);
            }
        })();
// http://www.patica.com.cn/patica/cgi/json/repairorder.php?type=10&order_type=&orderid=&user_phone=&order_time_from=&user_real_name=&page=1&pagesize=10
        var page=loadData({
            pagesize:10,
            page:1
        });
        s.page=page;
        
        
}]);
