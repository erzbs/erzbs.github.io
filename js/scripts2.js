$(function(){
	var topBtn = $('#pagetop');
	var flag = false;
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			if(flag == false){
				topBtn.stop().animate({
					'bottom': 50}, 200);
				flag=true;
			}
		} else {
			if(flag){
				topBtn.stop().animate({
					'bottom': -100}, 200);
				flag=false;
			}
		}
	});
	//�X�N���[�����ăg�b�v
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
				}, 300);
				return false;
		});
});
