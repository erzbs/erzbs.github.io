$(function(){
  
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var date = today.getDate();
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
  var $re_date = $("#re_date");
  for(var i=0;i<30;i++){
    var oneday = new Date(year, month,date + i);
    var hiduke = oneday.getFullYear() + "年" + oneday.getMonth() + "月" + oneday.getDate() + "日(" + youbi[oneday.getDay()] + ")";
    if(oneday.getDay() != 0) {
        var $newop = $('<option></option>').append(hiduke);
        $newop.attr("value",hiduke);
        $re_date.append($newop);
    }
  }
  var $pm_option = $("#re_time>option.pm");
  $re_date.on('change',function(){
    if($re_date.val().match(/木/) || $re_date.val().match(/土/)){
      $pm_option.addClass("none");
    }else{
      $pm_option.removeClass("none");
    }
  });

  var $radio_rese = $("#radio_rese");
  var $radio_con = $("#radio_con");

  var $div_book = $("#book");
  var $div_contact = $("#contact");
  var $pati_num = $("input[name='pati_num']");
  $radio_rese.click(function(){
    $div_book.addClass("checked");
    $div_contact.removeClass("checked");
    $pati_num.attr("required","true");
  });
  $radio_con.click(function(){
    $div_contact.addClass("checked");
    $div_book.removeClass("checked");
    $pati_num.removeAttr("required");
  });
});