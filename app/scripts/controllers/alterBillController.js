'use strict';
angular.module('controller')
  .controller('alterBillController',['$scope','$modalInstance','$http','city','source','orderTypes','resourceLoader','objParse','status','order',function(s,$modalInstance,$http,city,source,orderTypes,resourceLoader,objParse,status,order){        
        order=order.data.data.data[0];
        s.sources=source;
        s.orderTypes=orderTypes;
        s.user_citys=city.citys;
        s.statuss=status;
        s.colors=[
            {name:'金色',id:1},
            {name:'灰色',id:2},
            {name:'白色',id:3},
            {name:'黑色',id:4}
        ];
        if(order.ordertime){
            order.ordertime=new Date(order.ordertime);
        }
        if(order.user_repair_date){
            order.user_repair_date=new Date(order.user_repair_date*1000);
        }
        resourceLoader.loadBrand({
            producetype:'200001'
        }).success(function(d){
            s.brands=d.data.data;            
        });
        resourceLoader.loadTrouble().success(function(e){
            s.troubles=e.data.data;
        });

        s.oi=angular.extend({},order,true);

        s.$watch("oi.brand",function(n){
            if(!n){
                return;
            }
            resourceLoader.loadBrandModel({
                brandid:n
            }).success(function(e){      
                s.brandModels=e.data.data;
                s.oi.brand_model=s.brandModels[0].id;
            });
        });
        s.$watch("oi.trouble_type",function(n){
            if(!n){
                return;
            }
            resourceLoader.loadTroubleDetail({
                troubleid:n
            }).success(function(e){
                s.troubleDetails=e.data.data;

                s.oi.trouble_type_detail=s.troubleDetails[0].id
            });
        });
        s.$watch("oi.user_city",function(n){
            if(!n){
                return;
            }
            s.user_areas=city.regions.filter(function(item){
                if(item.parentName==n){
                    return true;    
                }else{
                    return false;
                }
            });
            s.oi.user_area=s.user_areas[0].region;
        });
        s.data={};
        s.ok = function () {
            var params=objParse(s.oi,[function(key,o,next){
                if(o instanceof Date){                    
                    next(new Date(o).getTime());
                } 
            }]);
            $http.post('api/order/updateOrder',params).success(function(d){
                if(d.code!=200){
                    alert(d.msg);
                }else{
                    alert('订单提交成功');
                    $modalInstance.close("success");    
                }
            }).error(function(){
                alert("提交失败");
            });
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        }; 
}]);

angular.module('controller')
  .controller('appendBillFormController',['$scope','$http',function($scope,$http){
    $scope.open = function($event) {
        $scope.status.opened = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        currentText:'今天'
    };
    $scope.status = {
        opened: false
    };
    $scope.ondoor_open = function($event) {
        $scope.status.ondoor_opened = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        currentText:'今天'
    };
    $scope.status = {
        ondoor_opened: false
    };
}]);

