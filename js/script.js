$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('.hero');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(document).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar.navbar-dyn").addClass('navbar-tosca');
      } else {
        $(".navbar.navbar-dyn").removeClass('navbar-tosca');
        // $(".navbar").css('box-shadow', 'none');
        // $('.navbar').css('background-color', 'transparent');
        // $(".navbar .btn-tosca").css('background-color', 'var(--tosca)');
        // $(".navbar .btn-tosca").css('color', 'white');
      }
    });
  }
});