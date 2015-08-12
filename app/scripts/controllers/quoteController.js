'use strict';
angular.module('controller')
  .controller('quoteController', ['$scope','$http','$timeout',function (s,$http,$timeout) {
        s.filter={};
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
        function doFilter(){
            console.log(s)
        }
        s.$watch('s.filter',function(){
            console.log(321)
        })
}]);