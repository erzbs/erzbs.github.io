$(function(){
	var topBtn = $('#pagetop');
	var flag = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if(flag == false){
				topBtn.stop().animate({
					'right': -80}, 200);
				flag=true;
			}
		} else {
			if(flag){
				topBtn.stop().animate({
					'right': -135}, 200);
				flag=false;
			}
		}
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
				}, 300);
				return false;
		});
});
