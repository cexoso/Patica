
angular.module('controller').
controller('orderController',['$scope','$resource','$state','orderInfo',function(s,resource,$state,orderInfo){
    var loadData=(function(){
        var orderInfo=resource('data/orderinfo/:name.json?id=:id');    
        return function (name,id){
            return orderInfo.get({name:name,id:id});
        }
    })();
    s.show="brand"; 
    //一次只能显示一个 {品牌|型号|颜色|故障}
    s.step=1;
    //  第1步 品牌
    //  第2步 型号
    //  第1步 颜色
    //  第1步 故障
    s.oi={};
    //用来保存订单信息的
    //oi.brand='apple' oi.version='iPhone 6 plus'...
    var list=s.list={};
    //list 用于页面展现数据
    list.brandType=loadData('brandList');
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
        function checkHandle(key,value_obj){
            // key 代表你要修改的键 brand version color fault
            // value_obj 代表你想要改成什么 brand='apple'
            s.step=step.indexOf(key)+2;
            //显示当前步成功
            s.show=step[step.indexOf(key)+1];
            //显示下一步
            var nextType=step[step.indexOf(key)+1];
            if(nextType){
                //如果有下一项
                list[nextType+'Type']=loadData(nextType+'List',value_obj.id);
                //加载下一项数据
            }
            //清空之后信息 brand选择之后 version 清空
            for(var i=step.indexOf(key)+1;i<step.length;i++){
                delete oi[step[i]];
            }
            oi[key]=value_obj;
            //在页面上显示当前选择的值
        }
        function clickHandle(key){
            if(s.step>=step.indexOf(key)+1){
                s.show=(s.show==key?"":key)
            }
        }
        return {
            checkHandle:checkHandle,
            clickHandle:clickHandle,     
        }
    })();
    s.checkHandle=handle.checkHandle;
    s.clickHandle=handle.clickHandle;
    s.submit=function(){
        //angular.extend(orderInfo,s.oi); 
        orderInfo.oi=s.oi;
        if(s.step>4){
        }else{
            console.log('信息不完全');
        }
        $state.go('index.modtype');
    }
}]);