'use strict';
angular.module('controller')
  .controller('manageController', ['$scope','$modal','$http',function (s,$modal,$http) {
        var loadData=(function(){
            return function (o){
                $http.post('api/order/getOrderByParam',o)
                .success(function(d){
                    console.log(d);
                    s.page={
                      totalcount:d.data.totle,
                      page:d.data.index,
                      pagesize:d.data.size,
                      orders:d.data.data
                    }
                    s.page.numPages = Math.floor(s.page.totalcount/s.page.pagesize)+1;    
                });
            }
        })();
        s.evaluation=function(order){
            var modalInstance = $modal.open({
                  animation: true,
                  templateUrl: 'views/evaluation.html',
                  controller: 'evaluationController',
                  size: 'lg',
                  resolve:{
                    order:function(){
                        return order;
                    }
                  }
                  //,backdrop:false
             });
            modalInstance.result.then(function(q){
                console.log(q)
            },function(w){
                console.log(w)
            });
        }

        s.del=function(order){
            var modalInstance = $modal.open({
                  animation: true,
                  templateUrl: 'views/del.html',
                  controller: 'delController',
                  size: 'sm'
                  //,backdrop:false
             });
            modalInstance.result.then(function(ok){
                (function(order){
                    //$http
                    var orders=s.page.orders;
                    for(var i=0;i<orders.length;i++){
                        if(orders[i].id==order.id){
                            orders.splice(i,1);
                            break;
                        }
                    }
                })(order)
            },function(msg){
            });
        }
        s.pageChanged = function(to) {
            loadData({
                pagesize:10,
                page:to
            });
        };
            


        //加载数据
         loadData({
            pagesize:10,
            page:1
         });

         // s.$on('a',function(a){
         //    console.log(a)
         // })
}]);


angular.module('controller')
  .controller('funCtroller',['$scope','$modal',function(s,$modal){
    // s.$emit('a',{a:123});
    s.appendBill=function(order){
            var modalInstance = $modal.open({
                  animation: true,
                  templateUrl: 'views/appendBill.html',
                  controller: 'appendBillController',
                  size: 'lg',
                  backdrop:false
             });
            modalInstance.result.then(function(q){
                console.log(q)
            },function(w){
                console.log(w)
            });
        }

    s.appendPeople=function(order){
            var modalInstance = $modal.open({
                  animation: true,
                  templateUrl: 'views/appendPeople.html',
                  controller: 'appendPeopleController',
                  size: 'lg',
                  backdrop:false
             });
            modalInstance.result.then(function(q){
                console.log(q)
            },function(w){
                console.log(w)
            });
        }

    
}]);