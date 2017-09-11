window.onload = init;
//文档加载完之后才能执行js操作
function init() {
	var arrPos = new Array()
	$(".cube").mousemove(function(e) {
		var x = e.clientX, y = e.clientY;
		
        //判断鼠标运行方向
        var  direction = '';
        if (arrPos.length > 0) {
            if (x > arrPos[0][0]) {
                if (y == arrPos[0][1]) direction = '右';
                else {
                    if (y > arrPos[0][1]) direction = '右下';
                    else direction = '右上';
                }
            }
            else {
                if (x == arrPos[0][0]) {
                    if (y < arrPos[0][1]) direction = '上';
                    else {
                        if (y > arrPos[0][1]) direction = '下';
                    }
                }
                else {
                    if (y == arrPos[0][1]) direction = '左';
                    else {
                        if (y > arrPos[0][1]) direction = '左上';
                        else direction = '左下';
                    }
                }
            }
        }
         
        if (arrPos.length < 1) arrPos.push(Array(x,y));
        else {
            arrPos[0][0] = x;
            arrPos[0][1] = y;
            document.getElementById('dd').innerHTML = direction;
            if(direction == "右下"){
            	$(".cube").addClass("cubex")
            } 
            if(direction == "上" || direction == "右上"){
            	$(".cube").addClass("cubey")
            	$(".cube").removeClass("cubex")
            } 
        }
	});

}