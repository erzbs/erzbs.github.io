$(function(){
  var $header = $('#top-head');
  $(window).scroll(function(){
    var win_height = $(this).scrollTop();
             /*ヘッダー部分のcss操作*/
    if (win_height > 50) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  });
});
