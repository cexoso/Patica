
angular.module('controller').
controller('orderController',['$scope','$resource',function(s,resource){
    var loadData=(function(){
        var orderInfo=resource('data/orderinfo/:name.json?id=:id');    
        return function (name,id){
            return orderInfo.get({name:name,id:id});
        }
    })();
    s.show="brand";
    s.step="1";
    s.oi={};
    var list=s.list={};
    list.brandType=loadData('brandList',123);
    list.versionType=loadData('versionList',123);
    list.colorType=loadData('colorList',123);
    list.colorType=loadData('faultList',123);
    var brand = {
               
            },
            version = {
                name: "型号",
                check: false,
                show: false
            },
            color = {
                name: "颜色",
                check: false,
                show: false
            },
            fault = {
                name: "故障",
                check: false,
                show: false
            };
        s.brand = brand;
        s.brandList = [
            "苹果"
        ];
        s.version = version;
        s.versionList = [
            "Iphone4",
            "Iphone4s",
            "Iphone5",
            "Iphone5c",
            "Iphone5s",
            "Iphone6",
            "Iphone6 plus"
        ];
        s.color = color;
        s.colorList = [
            "金色",
            "灰色",
            "白色"
        ];
        s.fault = fault;
        s.faultList = [
            "摄像头",
            "屏幕显示不正常",
            "数据线插口",
            "外壳",
            "信号弱",
            "蓝牙故障",
           "耳机孔",
            "扬声器",
            "听筒",
            "按键失灵",
            "无线连接",
            "电池",
            "感应功能",
            "进水",
            "其他"
           
        ];
        s.brandClickHandle = function() {
            s.brand.show = !s.brand.show;
        }
        s.versionClickHandle = function() {
            if (s.brand.check) {
                s.version.show = !s.version.show;
            } else {
                s.version.show = false;
            }
        }
        s.colorClickHandle = function() {
            if (s.version.check) {
                s.color.show = !s.color.show;
            } else {
                s.color.show = false;
            }
        }
        s.faultClickHandle = function() {
            if (s.color.check) {
                s.fault.show = !s.fault.show;
            } else {
                s.fault.show = false;
            }

        }

        s.checkBrand = function(name) {
            s.brand.name = name;
            s.brand.show = false;
            s.brand.check = true;
            s.version = {
                name: '型号',
                check: false,
                show: true
            };
            s.color = {
                name: "颜色",
                check: false,
                show: false
            };
            s.fault = {
                name: "故障",
                check: false,
                show: false
            }
        }
        s.checkVersion = function(name) {
            s.version.name = name;
            s.version.show = false;
            s.version.check = true;

            s.color = {
                name: "颜色",
                check: false,
                show: true
            };
            s.fault = {
                name: "故障",
                check: false,
                show: false
            };
        }
        s.checkColor = function(name) {
            s.color.name = name;
            s.color.show = false;
            s.color.check = true;

            s.fault = {
                name: "故障",
                check: false,
                show: true
            }
        }

        s.checkfault=function(name){
            s.fault.name = name;
            s.fault.show = false;
            s.fault.check = true;
        }

}]);