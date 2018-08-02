/**
 * Created by feng on 2018/3/19.
 */
window.onload = function () {
  getDate();


  /*获取年月日和星期几*/
  function getDate() {
    var dateEle = document.getElementById('date');

    var date = new Date();
    var year = date.getFullYear()+'年';
    var month = date.getMonth()+1+'月';
    var day = date.getDate()+'日';

    var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var weekIndex = date.getDay();
    var week = weekday[weekIndex];
    var dateStr = year + month + day +' ' + week;

    dateEle.innerHTML = dateStr;
  }

  $('#zero').on('click',function () {
    $('html,body').animate({scrollTop:0},500);
  });
  $('#product').on('click',function () {
    $('html,body').animate({scrollTop:600},500);
  });
  $('#company').on('click',function () {
    $('html,body').animate({scrollTop:1170},500);
  });
  $('#contact').on('click',function () {
    $('html,body').animate({scrollTop:1830},500);
  });


}















