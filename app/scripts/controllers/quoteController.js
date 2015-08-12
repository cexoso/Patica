'use strict';
angular.module('services').service('filter',['$http','$timeout',function($http,$timeout){
    return function($scope,exp){
          var doFilter=(function(){
            var timeout=null;
            return function(n){
                if (timeout) $timeout.cancel(timeout);
                timeout=$timeout(function(){
                    // $http.post('aaa',n)
                    //     .success(function(data){
                    //         console.log(data);
                    //     })
                    console.log('2015年8月12日 10:06:38 此处请求')
                },1000);
            }    
        })();
        $scope.$watch('filter',doFilter,true)
    }
}]);
angular.module('controller')
  .controller('quoteController', ['$scope','$http','$timeout','filter',function (s,$http,$timeout,filter) {
        s.quotes=[
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:'',quote:123},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''},
            {product:'手机',brand:'苹果',version:'Iphone4',color:'黄',fault:'耳机',subfault:''}
        ];
        function ok(scope){
            var quote=scope.quote;
            console.log(quote);
        } 
        function reset(scope){
            var quote=scope.quote;
            console.log(quote);
            quote.quote=quote.orignQupte;
        } 
        s.tbodyClick=function(e){
            var act;
            try{
                act=e.target.attributes.act;
            }catch(e){console.log(e)}
            if(act){
                var tr=angular.element(e.target).parent().parent();
                var scope=tr.scope();
                var fun={
                    ok:ok,
                    reset:reset
                    }[act.value]
                fun(scope);
            }else{
                return;
            }
        }
        filter(s,'filter');//监听过渡器 但是不知道为什么要用service来做
}]);