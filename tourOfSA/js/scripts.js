$(function() {
	// var $header = $('#top-head');
      var start_top = 0;

      var $body_html = $('body,html');
	$(window).scroll(function() {
             var win_height = $(this).scrollTop();
  //            /*ヘッダー部分のcss操作*/
		// if (win_height > 50) {
		// 	$header.addClass('fixed');
		// } else {
		// 	$header.removeClass('fixed');
		// }
             /*スクロール操作*/
              var $img1 = $('#titleImg1');
              var $img2 = $('#titleImg2');
              var $img3 = $('#titleImg3');
              var img2_posi = $img2.offset().top;
              var img3_posi = $img3.offset().top;
              var current_top = win_height;

              if($body_html.is(':animated')){
                return;
              }
              if (win_height > 50 && win_height < (img2_posi - 50)){
                if(start_top < win_height){//下スクロール
                  $body_html.animate({
                    scrollTop: img2_posi
                      }, 200);
                  current_top = img2_posi;
                }else if(start_top > win_height){
                  $body_html.animate({
                    scrollTop: 0
                      }, 200);
                  current_top = 0;
                }
              }else if  (win_height > (img2_posi + 50) && win_height < (img3_posi - 50)){
                if(start_top < win_height){//下スクロール
                  $body_html.animate({
                    scrollTop: img3_posi
                      }, 200);
                  current_top = img3_posi;
                }else if(start_top > win_height){
                    $body_html.animate({
                    scrollTop: img2_posi
                      }, 200);
                    current_top = img2_posi;
                }
              }

              $img1.removeClass('active');
              $img2.removeClass('active');
              $img3.removeClass('active');
              if(win_height >= 0 && win_height < img2_posi){
                $img1.addClass('active');
              }else if(win_height >= img2_posi && win_height < img3_posi){
                $img2.addClass('active');
              }else{
                $img3.addClass('active');
              }

              start_top = current_top;
              win_height = current_top;
	});

    /*アンカークリックでの動作*/
    var $ancs = $("div[id^=titleImg] + div>a");
    $ancs.on('click',function(e){

      e.preventDefault();
      var $anc = $($(this).attr('href'));
      $body_html.animate({
        scrollTop: $anc.offset().top
          }, 200);
      $ancs.each(function(){
        $(this).parent("div").prev("div").removeClass('active');
      });
      $anc.addClass('active');
      start_top = $anc.offset().top;
     });

});
