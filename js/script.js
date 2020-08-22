$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('.hero');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(document).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar").css('background-color', 'var(--tosca)');
        $(".navbar").css('box-shadow', '3px 3px 5px #11111145');
        $(".navbar .btn-tosca").css('background-color', 'white');
        $(".navbar .btn-tosca").css('color', 'var(--tosca)');
      } else {
        $(".navbar").css('box-shadow', 'none');
        $('.navbar').css('background-color', 'transparent');
        $(".navbar .btn-tosca").css('background-color', 'var(--tosca)');
        $(".navbar .btn-tosca").css('color', 'white');
      }
    });
  }
});