'use strict';
angular.module('controller')
  .controller('addDefaultController', ['$scope','confirm','$http',function (s,confirm,$http) {
        s.addDefault=function(defaultToAdd){
            if(!defaultToAdd){
                return;
            }
            confirm({title:'再次确认!',content:'你要提交的故障为:'+defaultToAdd,ok:'确认',cancel:'取消'})
            .then(function(){
                console.log('success')
            },function(){
                console.log('fail')
            })
        }
        function freshDefault(){
            // $http.get('/brand').success(function(data){
            //     s.brandList=data.brandList;    
            // })    
            s.defaultList=[{id:1,name:'碎屏'},
            {id:2,name:'按键失灵'},
            {id:3,name:'电池'}]
        }
        freshDefault();
        s.addSubDefault=function(subDefaultToAdd){
            if(!subDefaultToAdd){
                return;
            }
            confirm({title:'再次确认!',content:'你要提交的二级故障为:'+subDefaultToAdd,ok:'确认',cancel:'取消'})
            .then(function(){
                console.log('success')
            },function(){
                console.log('fail')
            })
        }
}]);