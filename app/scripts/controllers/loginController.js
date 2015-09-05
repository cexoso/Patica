angular.module('controller')
  .controller('loginController', ['$scope','$http','user','$state',function (s,$http,user,$state) {
    s.loginClickHandle=function(){
        $http.post('login',s.user).success(function(d){
            user.author="123";
            // if(d.code!=200){
            //     alert(d.msg);
            // }else{
            //     console.log(d.data)
            // }            
            $state.go('manage');
        })        
    }
    s.test=function(){
        $http.get('views/login.html').success(function(d){
            console.log(d)
        })
    }
}]);