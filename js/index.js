window.onload = function(){
	var cover = document.getElementById('first');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 135){
			cover.style.position = 'fixed';
			var ii = document.getElementById("two");
			ii.marginTop = 135 + "px";
		}else{
			cover.style.position = 'static';
		}
	}
}
//obj是元素，json是相应的属性以及其变化的值
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(
		function(){
			var isStop = true;
			for(var attr in json){
				if(attr == "opacity"){//opacity是透明度(乘100后的)
					var now = parseInt(getStyle(obj,attr) * 100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr] - now) / 30;
				speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
				if(attr == "opacity"){
					obj.style[attr] = (now + speed) / 100;
				}else{
					obj.style[attr] = now + speed + "px";
				}
				var current = now + speed;
				if(json[attr] !== current){
					isStop = false;
					//因为上面的setInterval
				}
			}
			if(isStop == true){
				clearInterval(obj.timer);
				callback && callback();
			}
		},10)
}
//obj是元素，style是属性的值
function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
		obj.currentStyle[style];
	}
}

