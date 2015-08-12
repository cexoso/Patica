'use strict';
angular.module('controller')
  .controller('addPBController', ['$scope','confirm','$http',function (s,confirm,$http) {
        s.addBrand=function(brandToAdd){
            if(!brandToAdd){
                return;
            }
            confirm({title:'再次确认!',content:'你要提交的品牌为:'+brandToAdd,ok:'确认',cancel:'取消'})
            .then(function(){
                console.log('success')
            },function(){
                console.log('fail')
            })
        }
        function freshBrand(){
            // $http.get('/brand').success(function(data){
            //     s.brandList=data.brandList;    
            // })    
            s.brandList=[{id:1,name:'ihone4'},
            {id:2,name:'ihone5'},
            {id:3,name:'ihone6'}]
        }
        freshBrand();
        s.addVersion=function(versionToAdd){
            if(!versionToAdd){
                return;
            }
            confirm({title:'再次确认!',content:'你要提交的型号为:'+versionToAdd,ok:'确认',cancel:'取消'})
            .then(function(){
                console.log('success')
            },function(){
                console.log('fail')
            })
        }
}]);