angular.module('services').filter('orderTypeParse',function(){
    return function(t){
        var map={
            '1':'上门维修',
            '2':'邮寄维修'
        }
        return map[t];
    }
}).filter('payStatusParse',function(){
    return function(t){
        var map={
            '0':'未支付',
            '1':'已支付'
        }
        return map[t];
    }
}).filter('statusParse',function(){
    return function(t){
        var map={
            '101': '订单已提交',
            '102': '维修工程师确认',
            '103': '确认支付',
            '104': '用户评价',
            '105': '订单结束',
            '200': '订单取消'
        }
        return map[t];
    }
}).filter('userRepairDateParse',function(){
    return function(t){
        var d=new Date(t*1000);
        return d.getYear()+1900+"-"+(d.getMonth()+1)+"-"+d.getDate();
    }
})

