angular.module('controller').
controller('modtypeController',['$scope',function(s){
    
}]);


angular.module('controller').
controller('doorController',['$scope','city','orderInfo','$filter',function(s,c,orderInfo,filter){
    //一级城市
    s.citys=c.citys;
    //二级区县联动
    s.$watch('city',function(cityId){
        //cytyId is id in {"cityName":"北京","id":"1"}
        if(!cityId){return} 
        s.regions=[].filter.call(c.regions,function(item){
          if(item.parentid==cityId){
            return true;
          }else{
            return false;
          }
        });
    });
    //获取4天时间 并挂载到dates上
    var today=new Date().getTime(),
          tomorrow = today+86400000,
          tdat=tomorrow+86400000,
          btdat=tdat+86400000;
    s.dates=[today,tomorrow,tdat,btdat];
    var times=[
        {key:10,value:'9-10',text:'9:00-10:00'},
        {key:12,value:'10-12',text:'10:00-12:00'},
        {key:14,value:'13-14',text:'13:00-14:00'},
        {key:16,value:'14-16',text:'14:00-16:00'},
        {key:18,value:'16-18',text:'16:00-18:00'},
        {key:20,value:'18-20',text:'18:00-20:00'}
    ];
    s.times=[].filter.call(times,function(o){
        return true;
        var h=new Date().getHours();
        if(h>o.key){
            return false;
        }else{
            return true;
        }
    });
}]);


angular.module('controller').
controller('mailController',['$scope',function(s){
    
}]);
angular.module('service').filter('msToDate',function(){
    var tag=['今天','明天','后天','大后天'];
    return function(ms){
        var today=new Date();
        var todayMs=new Date(today.getYear()+1900,today.getMonth(),today.getDate()).getTime();
        var d=new Date(ms);
        var delta=ms-todayMs
        var tagN="";
        tagN=tag[Math.floor(delta/86400000)];
        return d.getMonth()+1+'月'+d.getDate()+'日('+tagN+')';
    }
})
.service('orderInfo',function(){
    var orderInfo=Object.create({
        get:function(key){
            return this.key;
        },
        set:function(key,value){
            this[key]=value;
        }
    })
    return orderInfo;
}).constant('city',{
        citys: [{
            cityName: '北京',
            id: '1'
        }, {
            cityName: '上海',
            id: '2'
        }, {
            cityName: '广州',
            id: '3'
        }, {
            cityName: '深圳',
            id: '4'
        }, {
            cityName: '东莞',
            id: '5'
        }, {
            cityName: '厦门',
            id: '6'
        }, {
            cityName: '龙岩',
            id: '7'
        }],
        regions:[{
        id: '10001',
        region: '朝阳区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10002',
        region: '海淀区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10003',
        region: '西城区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10004',
        region: '东城区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10005',
        region: '崇文区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10006',
        region: '宣武区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10007',
        region: '丰台区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10008',
        region: '石景山区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10009',
        region: '门头沟',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10010',
        region: '房山区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10011',
        region: '大兴区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10012',
        region: '顺义区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10013',
        region: '怀柔区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10014',
        region: '密云区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10015',
        region: '昌平区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10016',
        region: '平谷区',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '10017',
        region: '延庆县',
        parentid: '1',
        parentName: '北京'
    }, {
        id: '20001',
        region: '黄浦区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20002',
        region: '徐汇区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20003',
        region: '长宁区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20004',
        region: '静安区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20005',
        region: '闸北区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20006',
        region: '虹口区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20007',
        region: '杨浦区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20008',
        region: '宝山区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20009',
        region: '闵行区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20010',
        region: '嘉定区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20011',
        region: '浦东新区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20012',
        region: '青浦区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20014',
        region: '普陀区',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '20015',
        region: '崇明县',
        parentid: '2',
        parentName: '上海'
    }, {
        id: '30001',
        region: '天河区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30002',
        region: '海珠区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30003',
        region: '荔湾区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30004',
        region: '越秀区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30005',
        region: '番禺区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30006',
        region: '花都区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30007',
        region: '萝岗区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30008',
        region: '白云区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30009',
        region: '南沙区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30010',
        region: '黄浦区',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '30011',
        region: '广州大学城',
        parentid: '3',
        parentName: '广州'
    }, {
        id: '40001',
        region: '南山区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40002',
        region: '罗湖区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40003',
        region: '福田区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40004',
        region: '宝安区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40005',
        region: '龙华新区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40006',
        region: '坂田片区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40007',
        region: '大运片区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40008',
        region: '布吉片区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40009',
        region: '龙岗区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: '40010',
        region: '横岗片区',
        parentid: '4',
        parentName: '深圳'
    }, {
        id: "50001",
        region: "寮步镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50002",
        region: "莞城区",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50003",
        region: "道滘镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50004",
        region: "沙田镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50005",
        region: "高埗镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50006",
        region: "石龙镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50007",
        region: "东城区",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50008",
        region: "茶山镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50009",
        region: "石碣镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50010",
        region: "松山湖",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50011",
        region: "厚街镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50012",
        region: "万江区",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50013",
        region: "南城区",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "50014",
        region: "长安镇",
        parentid: "5",
        parentName: "东莞"
    }, {
        id: "60001",
        region: "思明区",
        parentid: "6",
        parentName: "厦门"
    }, {
        id: "60002",
        region: "湖里区",
        parentid: "6",
        parentName: "厦门"
    }, {
        id: "60003",
        region: "翔安区",
        parentid: "6",
        parentName: "厦门"
    }, {
        id: "60004",
        region: "海沧区",
        parentid: "6",
        parentName: "厦门"
    }, {
        id: "60005",
        region: "集美区",
        parentid: "6",
        parentName: "厦门"
    }, {
        id: "60006",
        region: "同安区",
        parentid: "6",
        parentName: "厦门"
    },{
        id: "70001",
        region: "新罗区",
        parentid: "7",
        parentName: "龙岩"
    }]
});