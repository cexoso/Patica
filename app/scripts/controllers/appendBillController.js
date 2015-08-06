angular.module('paticaApp')
  .controller('appendBillController',['$scope','$modalInstance','$http','city',function(s,$modalInstance,$http,city){
        var loadData =(function(){
            var baseUrl='/data/orderinfo/';
            return function(url,params){
                return $http.get(baseUrl+url+'.json',angular.extend({cache:true},{params:params}));
            }
        })();
        s.oi={};
        //用来保存订单信息的
        //oi.brand='apple' oi.version='iPhone 6 plus'...
        var list=s.list={};
        //list 用于页面展现数据
        loadData('brandList').success(function(data){
            angular.extend(list,data)
        })
        /**
        * 用于品牌型号颜色故障的数据选取处理
        */
        var handle=(function(){
            var step=[
                "brand",
                "version",
                "color",
                "fault"
            ],
            oi=s.oi;
            function selectHandle(key,id){
                // key 代表你要修改的键 brand version color fault
                // id 所选项的id 
                var nextType=step[step.indexOf(key)+1];
                if(nextType){
                    //如果有下一项
                    //加载下一项数据
                    loadData(nextType+'List',{id:id}).success(function(data){
                        angular.extend(list,data)
                        console.log(list)
                    })
                }
                //清空之后信息 brand选择之后 version 清空
                for(var i=step.indexOf(key)+1;i<step.length;i++){
                    delete oi[step[i]];
                }
                //在页面上显示当前选择的值
            }
            return {
                selectHandle:selectHandle
            }
        })();
        //监听下单信息选择
        s.$watch('oi.brand',function(e){
            handle.selectHandle('brand',e);
        })
        s.$watch('oi.version',function(e){
            handle.selectHandle('version',e);
        })
        s.$watch('oi.color',function(e){
            handle.selectHandle('color',e);
        })
        s.$watch('oi.fault',function(e){
        
        })
        
        s.city=city;
        s.ok = function () {
            $http.post('qwe',s.oi).success(function(){
                $modalInstance.close("success");
            }).error(function(){
                alert("提交失败")
            });
        };
        s.cancel = function () {
           $modalInstance.dismiss('cancel');
        }; 
}])
