var percent = 0;
var loading = setInterval(function() {
	if(percent > 100) {
		percent = 0;
		$('.circle').removeClass('clip-auto');
		$('.right').addClass('wth0');
	} else if(percent > 50) {
		$('.circle').addClass('clip-auto');
		$('.right').removeClass('wth0');
	}
	$('.left').css("-webkit-transform", "rotate(" + (18 / 5) * percent + "deg)");
	$('.num>span').text(percent);
	
	if(percent == 100){
		clearInterval(loading)
	}
	percent++;
}, 10);