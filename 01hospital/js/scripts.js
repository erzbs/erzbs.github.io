window.onload = function(){

    var $body_html = $('body,html');
    var $header = $("#header");
    var $nav = $('header > nav');
    var $contents = $("#contents")
    var contents_top = $contents.offset().top;
    var win_height = $(window).scrollTop();
      if (win_height > contents_top - 200) {
        $header.addClass('visible');
        $nav.removeClass('none');
      } else {
        $header.removeClass('visible');
        $nav.addClass('none');
      }
    $(window).scroll(function(){
      win_height = $(this).scrollTop();
               /*ヘッダー部分のcss操作*/
      if (win_height > contents_top - 200) {
        $header.addClass('visible');
        $nav.removeClass('none');
      } else {
        $header.removeClass('visible');
        $nav.addClass('none');
      }
    });

    var $cont_a = $("#cont_a");
    $cont_a.click(function(event){
      event.preventDefault();
      $body_html.animate({
        scrollTop: contents_top
        }, 200);
    });

    var $top_a = $("#top_a");
    $top_a.click(function(event){
      event.preventDefault();
      $body_html.animate({
        scrollTop: 0
        }, 200);
    });

    today = new Date();
    youbi = new Array();
        youbi[0] = "日";
        youbi[1] = "月";
        youbi[2] = "火";
        youbi[3] = "水";
        youbi[4] = "木";
        youbi[5] = "金";
        youbi[6] = "土";
    time1 = new Array();
    time2 = new Array();
        time1[0] = "本日 休診日";
        time1[1] = "9:00～12:30";
        time1[2] = "9:00～12:30";
        time1[3] = "9:00～12:30";
        time1[4] = "9:00～12:30";
        time1[5] = "9:00～12:30";
        time1[6] = "9:00～12:30";
        time2[0] = "";
        time2[1] = "14:30～18:00";
        time2[2] = "14:30～18:00";
        time2[3] = "14:30～18:00";
        time2[4] = "午後は休診";
        time2[5] = "14:30～18:00";
        time2[6] = "午後は休診";


    var date_p = document.querySelector("#date");
    date_p.innerText = today.getFullYear() + "年" + today.getMonth() + "月" + today.getDate() + "日(" + youbi[today.getDay()] + ")";
    var time1_dd = document.querySelector("#time1");
    var time2_dd = document.querySelector("#time2");
    time1_dd.innerText = time1[today.getDay()];
    time2_dd.innerText = time2[today.getDay()];


    var wait_p = document.querySelector("#wait_p");
    var care_p = document.querySelector("#care_p");
    wait_p.innerText = "待ち人数　" + "0" + "人";
    care_p.innerText = "診療処置中人数　" + "0" + "人";


    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: new google.maps.LatLng(33.588457, 130.401339),
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // マーカー
  new google.maps.Marker({
    position: new google.maps.LatLng(33.588457, 130.401339),
    map: map,
    icon: "images/icons/map.png"
  });

  var $menu = $("#head_menu");
  $menu.on('click',function(){
    var $menu_nav = $("header > nav");
    $menu_nav.toggleClass("visible");
    $menu.toggleClass("visible");
  });
}