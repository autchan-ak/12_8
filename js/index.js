window.onload = function () {
  // 课程切换
  var $kecheng = $('.kecheng>a')
  $kecheng.hover(function () {
    let $this = $(this);
    let $kecheng_img = $kecheng.parent().next().children();
    $kecheng.removeClass('kc_active');
    $this.addClass('kc_active');
    let aa = $this.data().active;
    $kecheng_img.addClass('d-none');
    $(`#${aa}`).removeClass('d-none');
  })
  // 导师轮播
}