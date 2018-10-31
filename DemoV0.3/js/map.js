//新建三个地图上点
console.log(this);
var points = [  
	{"lng":106.533529,"lat":29.384273,"id":1,"name":"观景口水库"},  
	{"lng":106.103884,"lat":28.944134,"id":2,"name":"太平寨水库"},  
//	{"lng":105.778819,"lat":30.768417,"url":"https://www.csdn.com","id":3,"name":"新桥水库"},  
	{"lng":106.62703,"lat":29.776443,"id":4,"name":"东方红水库"},  
	{"lng":106.714326,"lat":29.350315,"id":5,"name":"月华寺水库"},  
	{"lng":106.207606,"lat":29.450042,"id":6,"name":"林家岩水库"}     
]; 

//创建标注点并添加到地图中
function addMarker(points) {
    //循环建立标注点
    for(var i=0, pointsLen = points.length; i<pointsLen; i++) {
        var point = new BMap.Point(points[i].lng, points[i].lat); //将标注点转化成地图上的点
        var marker = new BMap.Marker(point); //将点转化成标注点
        map.addOverlay(marker);  //将标注点添加到地图上
        //添加监听事件
        (function() {
            var thePoint = points[i];
            marker.addEventListener("click",
                function() {
                showInfo(this,thePoint);
            });
         })();  
    }
}

function showInfo(thisMarker,point) {
    //获取点的信息
    var sContent = 
    '<ul style="margin:0 0 5px 0;padding:0.2em 0">'  
    +'<li style="line-height: 26px;font-size: 15px;">'  
    +'<span style="width: 50px;display: inline-block;">id：</span>' + point.id + '</li>'  
    +'<li style="line-height: 26px;font-size: 15px;">'  
    +'<span style="width: 50px;display: inline-block;">名称：</span>' + point.name + '</li>'  
    +'<li style="line-height: 26px;font-size: 15px;"><span style="width: 50px;display: inline-block;">查看：</span><a href="'+point.url+'">详情</a></li>'  
    +'</ul>';
    var infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
    thisMarker.openInfoWindow(infoWindow); //图片加载完后重绘infoWindow
}

//创建地图
var map = new BMap.Map("allmap", {
	minZoom : 1,
	maxZoom : 18
}); 
map.centerAndZoom(new BMap.Point(106.533529, 29.384273), 10);  // 设置中心点
//map.centerAndZoom( "重庆");
map.setCurrentCity("重庆");          //设置为重庆
map.addControl(new BMap.MapTypeControl());  
map.enableScrollWheelZoom(true);   
addMarker(points);