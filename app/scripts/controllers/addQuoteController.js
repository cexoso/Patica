'use strict';
angular.module('controller')
  .controller('addQuoteController', ['$scope','$resource','$modal',function (s,resource,$modal) {
        s.quoteList=[];
        s.addQuoteDtl=function(order){
            var modalInstance = $modal.open({
                  animation: true,
                  templateUrl: 'views/addQuoteDtl.html',
                  controller: 'addQuoteDtlController'
             });
            modalInstance.result.then(function(q){
                s.quoteList.push(q);
            },function(w){
                console.log(w)
            });
        }
        s.submit=function(){
          alert('提交的数据为：'+JSON.stringify(s.quoteList))
        }
        s.addQuoteDtl();
}]);

angular.module('controller')
  .controller('addQuoteDtlController',['$scope','$modalInstance','$http',function(s,$modalInstance,$http){
        s.ok = function () {
            if(s.data){
              $modalInstance.close(s.data);  
            }
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        }; 

        s.brandList=[
          {name:'a',id:1},
          {name:'b',id:2},
          {name:'c',id:3}
        ]
        s.versionList=[
          {name:'one',id:1},
          {name:'two',id:2},
          {name:'three',id:3}
        ]

         s.faultList=[
          {name:'a',id:1},
          {name:'b',id:2},
          {name:'c',id:3}
        ]
        s.subFaultList=[
          {name:'one',id:1},
          {name:'two',id:2},
          {name:'three',id:3}
        ]
}]);

